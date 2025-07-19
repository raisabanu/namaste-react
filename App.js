import React from "react";
import { createRoot } from "react-dom/client"; 

// React Element using JSX
//React.createElement => Objdct => when render form HTML element - using react

const reactheading = React.createElement(
    "h1",
     { id: "heading" }, 
     "Namaste React"
);

const element1 = <span tabIndex={5}> React Element </span>
// React Component 

// React Functional Component - normal JS function that returns a JSX element

const HeadingComponent = () => (
      <div id="container">
        <h1 className="heading">Namaste React functional component is here!!</h1>
    </div> 
);

const title = (
  <h1 className="heading" tabIndex="5">
     {element1}
     {/* {HeadingComponent()} // calling it as a function  */}
     Namaste React using JSX
     <HeadingComponent />
    </h1>
    
);

const number = 10000;

//component composition - composing two components into one another
//placing a function component inside a function component
//we can write the number (JS variable) inside the component - it will put the number in there {number}


// JSX - merge html and js together , jsx is not HTML in Javascript , jsx is HTML LIKE syntax  - using JS

// JSX code => Babels Transpiles it to ReactElement, which is JS Object => render on to DOM as HTML element
const jsxHeading = <h1 className="head"  tabIndex="1"> Namaste React using JSX </h1>

const root = createRoot(document.getElementById("root")); 


root.render(<HeadingComponent />); // this is how babel understands that this is a functional component
