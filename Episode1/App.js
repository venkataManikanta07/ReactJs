// // Creating a React Element
// const heading = React.createElement("h1", {/* Attributes Tag */ }, "I'm h1 from React Script inside App.js File");
// const headingTwo = React.createElement("h2", { id: "headingTwo", class: "headerClass" }, "I'm h2 from React Script inside App.js File");

// // Accessing Root and injecting the element into the root. 
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(headingTwo);  

/** QUESTION : 
 * 
 * consider we wanted the html strucutre like this 
 * <div>
 *  <div>
 *      <h2> H2 element bla bla bla </h2>
 *   </div>
 * </div>
 */

const element = React.createElement("div", {
    className: "divOne"
},
    React.createElement("div", { className: "divTwo" },
        React.createElement("h2", { className: "headerInsideDiv" }, "I'm the element inside the two div's")
        //If we want to pass two elements like p or h3 after the above h2 we need to pass them inside an array 
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
