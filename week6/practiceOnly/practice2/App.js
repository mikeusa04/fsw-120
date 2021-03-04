// Render Props

// with string
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(name) {
                    return <h1>Hey there, {name}</h1>
                }
            }/>
        </div>
    )
}

export default App



// same above but with boolean
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(isDaytime) {
                    return (
                        <h1>{isDaytime ? "Good day" : "Good evening"}, Bob!</h1>
                    )
                }
            }/>
        </div>
    )
}

export default App


//with number
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(number) {
                    return (
                        <h1>{number >=0 ? "Positive" : "Negative"}</h1>
                    )
                }
            }/>
        </div>
    )
}

export default App


// two parameter
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(bool, number) {
                    return (
                        <div>
                            <h1>{number}</h1>
                            <h1>{bool ? "true" : "false"}</h1>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default App