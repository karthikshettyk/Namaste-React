import { createElement } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

let root= document.getElementById("root");
let h= createElement("h1",{id:"h1"},"I am happy");
let reactdomroot = createRoot(root);
reactdomroot.render(h);


