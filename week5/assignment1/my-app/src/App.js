import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import "./index.css"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Services">
                    <Services/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
