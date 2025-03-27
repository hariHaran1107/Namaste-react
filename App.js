import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 className="hello">lmao</h1>;
const number = 200;

const final = (
  <div className="good">
    <h1>bill</h1>
  </div>
);

const HeadingComponent1 = () => (
  <div id="container">
    <TitleComponent />
    {TitleComponent()}
    {final}
    <h1>{number}</h1>
    <h1 className="heading">hello from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
