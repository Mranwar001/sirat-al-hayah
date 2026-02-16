function QuoteBlock({ text, author }) {
  return (
    <div className="bg-primary text-soft p-6 rounded-lg my-6 relative shadow-md">
      <div className="absolute -top-3 left-6 text-4xl text-accent">"</div>
      <p className="text-lg italic mb-3 pl-6 text-secondary">{text}</p>
      <p className="text-accent text-right font-semibold">— {author}</p>
    </div>
  );
}

export default QuoteBlock;
