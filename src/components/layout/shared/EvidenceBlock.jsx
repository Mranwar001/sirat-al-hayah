function EvidenceBlock({ type, text, translation, reference }) {
  const isQuran = type === "quran";
  
  return (
    <div
      className={`rounded-lg p-5 my-4 shadow-md ${
        isQuran ? "border-l-4 border-islamic bg-islamic-light bg-opacity-10" 
                : "border-l-4 border-accent bg-accent-light bg-opacity-10"
      }`}
    >
      {isQuran ? (
        <p className="arabic-text text-2xl mb-3">{text}</p>
      ) : (
        <p className="italic text-secondary mb-3">"{text}"</p>
      )}
      
      {translation && (
        <p className="text-secondary mb-2">{translation}</p>
      )}
      
      <p className="text-sm text-soft-dark">— {reference}</p>
    </div>
  );
}

export default EvidenceBlock;
