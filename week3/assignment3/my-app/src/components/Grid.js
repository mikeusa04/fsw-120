import React from "react"
class Grid extends React.Component {
    render() {
        return (
            <div class="grid">
               <Square cardColor="red" height={200} width={200} />
               <Square cardColor="red" height={200} width={200} />
               <Square cardColor="red" height={200} width={200} />
               <Square cardColor="red" height={200} width={200} />
            </div>
        )
    }
}

export default Grid