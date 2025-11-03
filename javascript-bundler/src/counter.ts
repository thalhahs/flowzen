export function setupCounter(element: HTMLButtonElement) {
    let count = 0;
    const setCounter = (count: number) => {
      element.innerHTML = `Count: ${count}`;
    };
    element.addEventListener("click", () => {
      count++;
      setCounter(count);
    });
    setCounter(count);
  }