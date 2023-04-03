import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const head = React.createElement('h1', {}, "Hello I'm heading 1");


//Syntax for components

//Functional components
const Component1 = () => {
  return <h1>Component 1</h1>
}

const Component2 = function() {
    return (
        <h1>Component 2</h1>
    )
}

// JSX
const jsxHead = 
    <div>
        <h1>Hi JSX!</h1> 
        <h2>Hello</h2>  
    </div>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Component1 /><Component2 /></>);



