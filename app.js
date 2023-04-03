import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const head = React.createElement('h1', {}, "Hello I'm heading 1");


//Syntax for Functional components

const Component1 = () => (
    <p>Component 1</p>
);

const Component2 = function() {
    return (
        <p>Component 2</p>
    )
}

const num = 30;
const Component3 = () => (
    <div id="wrapper">
        <h1>Hi! I am {num} years old!</h1>  
    </div>
)

// JSX / React Element
const jsxHead = (
    <div>
        <h1>This is a React Element!</h1> 
    </div>
);

// Different ways to render component

const VariousWays = (
    <>
        <></>
        <Component1/>
        <Component2></Component2>  
        {Component3()}
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>{jsxHead}{VariousWays}<Component1 /><Component2 /><Component3/></>);

