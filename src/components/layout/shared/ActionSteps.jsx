function ActionSteps({ steps }) {
  return (
    <div className="bg-soft-dark rounded-lg p-6 my-6 shadow-md">
      <h4 className="text-xl font-bold mb-4 text-accent flex items-center">
        <span className="mr-2">💡</span> Action Steps
      </h4>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center bg-accent text-primary-dark rounded-full w-6 h-6 text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
              {index + 1}
            </span>
            <span className="text-primary-light">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionSteps;
