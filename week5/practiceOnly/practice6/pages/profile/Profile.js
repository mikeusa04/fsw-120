import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Settings from "./Settings"
import Info from "./Info"

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
            </ul>
            
            <Switch>
                <Route path="/profile/info">
                    <Info/>
                </Route>
                <Route path="/profile/settings">
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}
/* we can take off the <Switch>...</Switch> part from here and add it to the App.js in this case when 
we click on Profile info or Profile Settings they will show up in a different pages, if we keep the part here
and take it off the App.js when we click the link it will show up in the same page under the links not in 
new page*/