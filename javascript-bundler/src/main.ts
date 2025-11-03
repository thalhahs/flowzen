import "./style.css";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Bun + Vite + TypeScript</h2>
    <button id="counter"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);