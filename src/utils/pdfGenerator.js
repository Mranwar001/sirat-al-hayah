import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Generate a PDF from a DOM element with improved quality and error handling
 * @param {string} elementId - ID of the element to capture
 * @param {string} fileName - Name for the PDF file (without extension)
 * @param {Object} options - Optional configuration
 * @param {boolean} options.showPageNumbers - Whether to show page numbers (default: true)
 * @param {boolean} options.showFooter - Whether to show footer text (default: true)
 * @param {string} options.footerText - Custom footer text
 * @param {boolean} options.darkMode - Whether to invert colors for dark mode
 * @param {number} options.scale - Resolution scale (default: 2, higher = better quality but larger file)
 * @param {boolean} options.autoDownload - Automatically download (default: true)
 * @returns {Promise<Blob|null>} PDF blob if autoDownload is false, otherwise null
 */
export const generatePDF = async (elementId, fileName, options = {}) => {
  const {
    showPageNumbers = true,
    showFooter = true,
    footerText = "Islamic Life Framework - islamic-life-framework.vercel.app",
    darkMode = false,
    scale = 2,
    autoDownload = true
  } = options;

  // Sanitize fileName for filesystem
  const safeFileName = fileName
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase()
    .substring(0, 50); // Limit filename length

  let loadingIndicator = null;
  let originalBackgroundColor = null;

  try {
    const input = document.getElementById(elementId);
    if (!input) throw new Error(`Element with id "${elementId}" not found`);

    // Show loading indicator with better styling
    loadingIndicator = createLoadingIndicator();
    document.body.appendChild(loadingIndicator);

    // Store original styles
    const originalStyles = {
      overflow: document.documentElement.style.overflow,
      height: document.documentElement.style.height
    };

    // Temporarily disable scrolling for better capture
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";

    // Handle dark mode by temporarily inverting colors
    if (darkMode) {
      originalBackgroundColor = input.style.backgroundColor;
      input.style.backgroundColor = "#ffffff";
      input.classList.add("pdf-invert");
    }

    // Capture element with better quality
    const canvas = await html2canvas(input, {
      scale: scale,
      backgroundColor: darkMode ? "#ffffff" : "#ffffff",
      useCORS: true,
      logging: false,
      allowTaint: false,
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight,
      onclone: (clonedDoc) => {
        // Enhance cloned document for better PDF rendering
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.boxShadow = "none";
          clonedElement.style.margin = "0";
          clonedElement.style.padding = "10px";
          
          // Fix font rendering
          const allElements = clonedElement.getElementsByTagName("*");
          for (let el of allElements) {
            el.style.webkitFontSmoothing = "antialiased";
            el.style.mozOsxFontSmoothing = "grayscale";
          }
        }
      }
    });

    // Restore original styles
    document.documentElement.style.overflow = originalStyles.overflow;
    document.documentElement.style.height = originalStyles.height;
    
    if (darkMode) {
      input.style.backgroundColor = originalBackgroundColor;
      input.classList.remove("pdf-invert");
    }

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate image dimensions to fit page width
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;
    let pageNum = 1;

    // Add metadata to PDF
    pdf.setProperties({
      title: fileName,
      subject: "Islamic Life Framework Module",
      author: "Islamic Life Framework",
      keywords: "islam, spirituality, self-development",
      creator: "Islamic Life Framework PDF Generator"
    });

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");

    // Add page number and footer to first page if needed
    if (showPageNumbers || showFooter) {
      addFooterAndPageNumber(pdf, pageNum, showPageNumbers, showFooter, footerText, pageHeight, pageWidth);
    }
    
    heightLeft -= pageHeight;
    pageNum++;

    // Additional pages
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      
      if (showPageNumbers || showFooter) {
        addFooterAndPageNumber(pdf, pageNum, showPageNumbers, showFooter, footerText, pageHeight, pageWidth);
      }
      
      heightLeft -= pageHeight;
      pageNum++;
    }

    // Remove loading indicator
    if (loadingIndicator && loadingIndicator.parentNode) {
      document.body.removeChild(loadingIndicator);
    }

    if (autoDownload) {
      // Download PDF
      pdf.save(`${safeFileName}.pdf`);
      
      // Show success message
      showNotification("✅ PDF downloaded successfully!", "success");
    } else {
      // Return PDF as blob
      const pdfBlob = pdf.output("blob");
      showNotification(`✅ PDF generated successfully! (${(pdfBlob.size / 1024).toFixed(2)} KB)`, "success");
      return pdfBlob;
    }

    return null;
  } catch (error) {
    console.error("PDF Generation Error:", error);
    
    // Remove loading indicator if it exists
    if (loadingIndicator && loadingIndicator.parentNode) {
      document.body.removeChild(loadingIndicator);
    }
    
    // Show error message with details
    let errorMessage = "Error generating PDF. ";
    if (error.message.includes("not found")) {
      errorMessage += "The content section couldn't be found. Please refresh and try again.";
    } else if (error.message.includes("canvas")) {
      errorMessage += "There was an issue rendering the content. Try with simpler content.";
    } else {
      errorMessage += "Please try again or contact support if the issue persists.";
    }
    
    showNotification("❌ " + errorMessage, "error");
    
    // Rethrow if caller wants to handle it
    throw error;
  }
};

/**
 * Generate PDFs for multiple modules at once
 * @param {Array<string>} elementIds - Array of element IDs to capture
 * @param {string} baseFileName - Base name for combined PDF
 * @param {Object} options - Options passed to generatePDF
 */
export const generateMultiModulePDF = async (elementIds, baseFileName, options = {}) => {
  const loadingIndicator = createLoadingIndicator("Generating multi-module PDF...");
  document.body.appendChild(loadingIndicator);
  
  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true
    });
    
    let isFirstPage = true;
    
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const input = document.getElementById(elementId);
      
      if (!input) {
        console.warn(`Element "${elementId}" not found, skipping...`);
        continue;
      }
      
      // Update loading message
      loadingIndicator.textContent = `Generating PDF: Module ${i + 1}/${elementIds.length}...`;
      
      // Capture element
      const canvas = await html2canvas(input, {
        scale: options.scale || 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if not first
      if (!isFirstPage) {
        pdf.addPage();
      }
      
      // Add image
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST");
      
      isFirstPage = false;
    }
    
    // Save combined PDF
    pdf.save(`${baseFileName.replace(/[^a-z0-9]/gi, "_")}_combined.pdf`);
    
    document.body.removeChild(loadingIndicator);
    showNotification(`✅ Combined PDF downloaded with ${elementIds.length} modules!`, "success");
    
  } catch (error) {
    console.error("Multi-module PDF Error:", error);
    document.body.removeChild(loadingIndicator);
    showNotification("❌ Error generating combined PDF", "error");
  }
};

// Helper function to create loading indicator
const createLoadingIndicator = (message = "Generating PDF...") => {
  const indicator = document.createElement("div");
  indicator.className = "fixed top-4 right-4 bg-primary text-soft px-4 py-3 rounded-lg shadow-xl z-50 flex items-center gap-2";
  indicator.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>${message}</span>
  `;
  return indicator;
};

// Helper function to show notification
const showNotification = (message, type = "success") => {
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 ${
    type === "success" ? "bg-accent text-primary-dark" : "bg-red-500 text-white"
  } px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-500`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 500);
  }, 3000);
};

// Helper function to add footer and page numbers
const addFooterAndPageNumber = (pdf, pageNum, showPageNumbers, showFooter, footerText, pageHeight, pageWidth) => {
  pdf.setFontSize(8);
  pdf.setTextColor(100, 100, 100); // Gray color
  
  if (showPageNumbers) {
    pdf.text(`Page ${pageNum}`, pageWidth - 20, pageHeight - 5);
  }
  
  if (showFooter) {
    pdf.text(footerText, 10, pageHeight - 5);
  }
};

// Helper function to get element dimensions
export const getElementDimensions = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return null;
  
  return {
    width: element.scrollWidth,
    height: element.scrollHeight,
    clientWidth: element.clientWidth,
    clientHeight: element.clientHeight
  };
};

// Export styles for PDF optimization (to be added to global CSS)
export const pdfOptimizationStyles = `
  /* Optimize for PDF export */
  .pdf-optimized {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .pdf-invert {
    filter: invert(1) hue-rotate(180deg);
  }
  
  @media print {
    .no-print {
      display: none !important;
    }
    
    .print-break-inside {
      page-break-inside: avoid;
    }
    
    .print-break-before {
      page-break-before: always;
    }
    
    .print-break-after {
      page-break-after: always;
    }
  }
`;

// Export default with all functions
export default {
  generatePDF,
  generateMultiModulePDF,
  getElementDimensions,
  pdfOptimizationStyles
};
