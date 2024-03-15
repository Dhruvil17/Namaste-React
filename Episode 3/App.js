import React from "react";
import ReactDOM from "react-dom/client";
import Image_1 from "./Image_1.jpg";
import Image_2 from "./Image_2.jpg";
import "./style.css";

const Header = () => {
    return (
        <div id="header">
            <img src={Image_1} alt="Logo" className="Logo" />
            <img src={Image_2} alt="User" className="User" />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
