import { useState } from "react";

export function CounterIncrement() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count Value: {count}</p>
    </div>
  );
}
