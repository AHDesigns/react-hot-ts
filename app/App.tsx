import "isomorphic-fetch";
import * as React from "react";
import { hot } from "react-hot-loader";

const getG = () => fetch("/api/git", {
  body: JSON.stringify({
    query: "query limit { rateLimit { cost } }",
  }),
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
});

getG().then((res) => { console.log(res); });

const App = () => (
  <h1>
    Hello, you.<br />
  </h1>
);
// console.log("chuffty");

export default hot(module)(App);

