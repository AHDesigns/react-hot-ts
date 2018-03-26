import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const root = document.createElement("div");
document.body.appendChild(root);
// console.log('hi');

render(<App />, root);
