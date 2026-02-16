import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (elementId, fileName) => {
  try {
    const input = document.getElementById(elementId);
    if (!input) throw new Error(`Element with id "${elementId}" not found`);

    // Show loading indicator
    const loadingIndicator = document.createElement("div");
    loadingIndicator.className =
      "fixed top-4 right-4 bg-primary text-soft px-4 py-2 rounded shadow-lg z-50";
    loadingIndicator.textContent = "Generating PDF...";
    document.body.appendChild(loadingIndicator);

    // Capture element as canvas
    const canvas = await html2canvas(input, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Additional pages
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${fileName.replace(/\s+/g, "_")}.pdf`);

    // Remove loading indicator
    document.body.removeChild(loadingIndicator);

    // Success message
    const successMsg = document.createElement("div");
    successMsg.className =
      "fixed top-4 right-4 bg-accent text-primary-dark px-4 py-2 rounded shadow-lg z-50";
    successMsg.textContent = "✅ PDF downloaded successfully!";
    document.body.appendChild(successMsg);

    setTimeout(() => {
      document.body.removeChild(successMsg);
    }, 3000);
  } catch (error) {
    console.error("PDF Generation Error:", error);
    alert("Error generating PDF. Please try again.");
  }
};
