import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import Quizcontext from "./helpers/Quizcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Quizcontext>
            <App/>
        </Quizcontext>
    </React.StrictMode>
);
