/** the rest of the file are same as before just an update on this one only
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed!")} // here we are doing the function inline we could do it out too
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem