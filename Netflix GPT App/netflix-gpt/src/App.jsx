import { createRoot } from "react-dom/client";
import "./App.css";
import Body from "./components/Body";

createRoot(document.getElementById("root")).render(<App />);

function App() {
  return (
    <div>
     <Body></Body>
    </div>
  );
}

export default App;
