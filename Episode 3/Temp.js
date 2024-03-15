import React from "react";
import ReactDOM from "react-dom/client";
import Image_1 from "./Image_1.jpg";
import { BrowserRouter } from "react-router-dom";

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="jsxHeading">Namaste React</h1>;

// //Functional Component
// const Title = () => <h1 id="title">Namaste React using JSX</h1>;

// //Component Composition
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

//1. Nested Header using React Element
const heading = React.createElement("div", { className: "title" }, [
    React.createElement("h1", { key: "1" }, "I am h1 Tag"),
    React.createElement("h2", { key: "2" }, "I am h2 Tag"),
    React.createElement("h3", { key: "3" }, "I am h3 Tag"),
]);

//2. Nested Header using JSX
const heading2 = (
    <div className="title">
        <h1 key="1">I am JSX h1 Tag</h1>
        <h2 key="2">I am JSX h2 Tag</h2>
        <h3 key="3">I am JSX h3 Tag</h3>
    </div>
);

//3. Functional Component in React
const Heading = () => (
    <div className="title">
        <Body />
        <h1 key="1">I am Functional Component h1 Tag</h1>
        <h2 key="2">I am Functional Component h2 Tag</h2>
        <h3 key="3">I am Functional Component h3 Tag</h3>
    </div>
);

//4. Component Composition
const Body = () => <h1>I am main Body Component</h1>;

//5. Different ways of writing and rendering the Component in the application

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
