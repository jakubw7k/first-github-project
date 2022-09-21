import React from "react";
import ReactDOM from "react-dom";

//JSX
ReactDOM.render(<l1><h1>A</h1><h2>B</h2><h3>C</h3></l1>, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
