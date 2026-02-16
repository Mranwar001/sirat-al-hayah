function QuoteBlock({ text, author }) {
  return (
    <div className="bg-primary text-soft p-6 rounded-lg my-6 relative shadow-md">
      {/* Gold quote icon */}
      <div className="absolute -top-3 left-6 text-4xl text-yellow-600">"</div>
      
      {                                                                             }
      <p className="text-lg italic mb-3 pl-6 text-gray-800">{text}</p>
      
      {                                     }
      <p className="text-yellow-600 text-right font-semibold">— {author}</p>
    </div>
  );
}

export default QuoteBlock;
