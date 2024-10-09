import React from "react"
import ReactDOM from "react-dom/client"

// Create a COMPONENT COMPOSITION type scenario

const Title = () => <h1>TITLE COMPONENT</h1>

const BodyComponent = () => {
    return <>
        <Title />
        <h3>Inside the body </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fuga, odio! Adipisci, corporis? Magni voluptates nam praesentium laboriosam.
            Maiores soluta amet, dolor a adipisci architecto tenetur rem ex inventore, harum quasi.</p>
    </>
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BodyComponent />)