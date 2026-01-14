import { useState } from "react";

export default function QuantityButton() {
  const [count, setCount] = useState(1);

  return (
    <div className="inline-flex overflow-hidden rounded-full">
      <button
        onClick={() => setCount((c) => Math.max(1, c - 1))}
        className="w-9 h-10  bg-primary text-white text-xl flex items-center justify-center"
      >
        −
      </button>

      <div className="w-12 h-10 bg-pink-200 text-primary font-semibold flex items-center justify-center">
        {count}
      </div>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="w-9 h-10 bg-primary text-white text-xl flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}
