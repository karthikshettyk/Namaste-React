import { createElement } from "react";

import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

//normal heading
const heading = createElement("h1", { id: "h1tag" }, "Hello");

console.log(heading);

//JSX heading
const jsxheading = <h1>Hello</h1>;

const spanElement = <span>Jai Sri Krishna</span>;

//component 1
const Comp1 = () => {
  return <>I am comp 1</>;
};

const name="karthik";

//component 2
const Comp2 = () => {
  return (
    <div>
      {"karthik"}
      {107 + 1}
      <br></br>
      {spanElement}
      <div>I am comp 2</div>
      {console.log(name)}
    </div>
  );
};

//component compisition

const Comp3 = () => {
  return (
    <div>
      <Comp1></Comp1>
      <br></br>
      <Comp2></Comp2>
    </div>
  );
};

console.log(jsxheading);
//render components
// reactRoot.render(<Comp1></Comp1>);
reactRoot.render(<Comp2></Comp2>);

//rendering composition componnets
//reactRoot.render(<Comp3></Comp3>);
