import { Link } from "react-router-dom";
import { useState } from "react";
import { generatePDF } from "../utils/pdfGenerator";
import EvidenceBlock from "../components/layout/shared/EvidenceBlock";
import ActionSteps from "../components/layout/shared/ActionSteps";

// Import all data
import foundation from "../data/foundation";
import childhood from "../data/childhood";
import youth from "../data/youth";
import marriage from "../data/marriage";
import parenting from "../data/parenting";
import character from "../data/character";
import death from "../data/death";

function SectionPage({ type }) {
  const [loading, setLoading] = useState(false);
  
  const dataMap = {
    foundation,
    childhood,
    youth,
    marriage,
    parenting,
    character,
    death
  };
  
  const section = dataMap[type];
  
  if (!section) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-accent">Section Not Found</h2>
        <p className="mt-4 text-secondary">The requested section does not exist.</p>
      </div>
    );
  }
  
  const handlePDFDownload = async () => {
    setLoading(true);
    try {
      await generatePDF("pdf-content", section.title);
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-soft rounded-lg shadow-md p-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{section.icon}</span>
          <div>
            {/* MAIN TITLE - Now Gold */}
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">
              {section.title}
            </h1>
            {/* SUBTITLE - Now Slightly Lighter Gold / Warm */}
            <p className="text-xl text-accent-light mt-1">{section.subtitle}</p>
          </div>
        </div>
        {/* INTRODUCTION - Keep as is */}
        <p className="text-lg text-secondary leading-relaxed">
          {section.introduction}
        </p>
      </div>
      
      {/* PDF Content */}
      <div id="pdf-content" className="bg-soft rounded-lg shadow-md p-8 space-y-8">
        {/* Main Points */}
        {section.points.map((point, index) => (
          <div key={index} className="border-b border-soft-dark pb-6 last:border-0">
            {/* POINT HEADINGS - Now Gold to match main title */}
            <h2 className="text-2xl font-bold text-accent mb-3">
              {point.heading}
            </h2>
            {/* POINT TEXT - Keep as secondary text */}
            <p className="text-secondary mb-4">{point.text}</p>
            
            {point.evidence && (
              <EvidenceBlock
                type={point.evidence.quran ? 'quran' : 'hadith'}
                text={point.evidence.quran || point.evidence.hadith}
                translation={point.evidence.translation}
                reference={point.evidence.surah || point.evidence.reference}
              />
            )}
            
            {/* EXPLANATION - Add if exists (from your enhanced files) */}
            {point.explanation && (
              <div className="mt-4 p-4 bg-primary bg-opacity-5 rounded-lg">
                <p className="text-primary-dark italic">{point.explanation}</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Action Steps */}
        {section.actionSteps && (
          <ActionSteps steps={section.actionSteps} />
        )}
        
        {/* Duas */}
        {section.duas && section.duas.length > 0 && (
          <div className="bg-primary bg-opacity-5 rounded-lg p-6">
            {/* DUAS HEADING - Gold to match */}
            <h3 className="text-xl font-bold mb-4 text-accent">Supplications</h3>
            {section.duas.map((dua, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="arabic-text text-2xl mb-2">{dua.arabic}</p>
                <p className="text-secondary italic">{dua.translation}</p>
                <p className="text-sm text-soft-dark mt-1">— {dua.reference}</p>
                {/* DUA CONTEXT - Add if exists */}
                {dua.context && (
                  <p className="text-sm text-accent mt-1">{dua.context}</p>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Footnotes - Add if exists */}
        {section.footnotes && (
          <div className="mt-8 p-4 bg-soft-dark bg-opacity-10 rounded-lg">
            <h4 className="font-bold text-accent mb-2">Notes</h4>
            {Object.entries(section.footnotes).map(([key, value]) => (
              <p key={key} className="text-sm text-secondary mb-2">
                <span className="font-semibold text-primary">{key}:</span> {value}
              </p>
            ))}
          </div>
        )}
        
        {/* Key Takeaway - Add if exists */}
        {section.keyTakeaway && (
          <div className="mt-8 p-6 bg-accent bg-opacity-10 rounded-lg border-l-4 border-accent">
            <p className="text-primary-dark font-medium italic">
              {section.keyTakeaway}
            </p>
          </div>
        )}
      </div>
      
      {/* PDF Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handlePDFDownload}
          disabled={loading}
          className={`btn-primary text-lg px-8 py-3 flex items-center space-x-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Generating PDF...</span>
            </>
          ) : (
            <>
              <span>📥</span>
              <span>Download as PDF</span>
            </>
          )}
        </button>
      </div>
      
      {/* Navigation Links */}
      <div className="flex justify-between mt-8">
        <Link 
          to="/" 
          className="text-primary hover:text-accent transition flex items-center space-x-1"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default SectionPage;
