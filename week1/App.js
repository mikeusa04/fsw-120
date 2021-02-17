/* From scratch, initialize the React app
 Render an <App /> component
 Create the <App /> component from scratch
 Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
 like you're making a todo list with some hard-coded items on it
 to create react app
 npx create-react-app my-app
 cd my-app
 npm start */



import React from "react"

function App() {
    return (
        <div>
            <input type="checkbox"/>
            <p>Hello World</p>
            
            <input type="checkbox"/>
            <p>Hello World</p>

            <input type="checkbox"/>
            <p>Hello World</p>

            <input type="checkbox"/>
            <p>Hello World</p>
        </div>
    );
}
export default App;