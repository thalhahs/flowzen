import { Tasks } from "./tasks";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg">
        <h1 className="text-sky-700 text-2xl font-bold my-4">
          Task Management
        </h1>
        <Tasks />
      </main>
    </div>
  );
}
