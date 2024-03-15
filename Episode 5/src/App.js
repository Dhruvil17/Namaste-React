import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <div></div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
