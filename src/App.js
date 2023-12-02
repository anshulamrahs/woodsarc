import  ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import '../index.css';
import Body from "./components/Body";


const App = () => {
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);