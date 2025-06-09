import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

const App = () => {
  return (
    <div className="app-layout">
      <Header></Header>
      <br></br>
      <Body></Body>
      <br></br>
      <Footer></Footer>
    </div>
  );
};
 
reactRoot.render(<App></App>);

