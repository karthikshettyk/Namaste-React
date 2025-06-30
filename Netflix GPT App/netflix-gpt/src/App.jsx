//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

createRoot(document.getElementById("root")).render(<App />);

function App() {
  return (
    <>
      <div>The Netflix Gpt</div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
