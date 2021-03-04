// with string
import React from "react"

function Example(props) {
    return (
        <div>
            {props.render("Sarah")}
        </div>
    )
}

export default Example



// same above but with boolean
import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true)}
        </div>
    )
}

export default Example


// with number
import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(42)}
        </div>
    )
}

export default Example


// two parameter
import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true, 42)}
        </div>
    )
}

export default Example