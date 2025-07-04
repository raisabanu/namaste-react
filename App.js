//createElement - three arguements -  Tag (h1,h2 etc) , Object and then what comes in tag
//React has to have a root , where it will do all dom manipulations
//create root inside react for the react library

{/* <div id="parent">
    <div id="child">
       <h1>I am h1 tag</h1>
       <h2>Iam h2 tag</h2>
       </div>
</div> */}

const parent = React.createElement("div" , {id: "parent"} , [
React.createElement("div" ,{id: "child"}, [
        React.createElement("h1", {}, "I am an h1 Tag") ,
        React.createElement("h1", {}, "I am an h2 Tag") 
    ]),
    React.createElement("div" ,{id: "child2"}, [
        React.createElement("h1", {}, "I am an h1 Tag") ,
        React.createElement("h1", {}, "I am an h2 Tag") 
    ]),
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

// //we are creating a reach element which is heading, a react elemen s JS object
// const heading = React.createElement(
//     "h1", 
//     { id: "heading"},   //attributes to the h1 tag
//     "Hello World From React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 
