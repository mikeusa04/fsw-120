/*Create a website that looks similar to this one (Links to an external site.).
You will organize it into these components:
Indented components are supposed to be nested.
<Header />        <Navbar />
<BlogList />
        <BlogPost />
<Footer />
You will pass <BlogPost /> it's title, sub title, author, and date through props.
Eventually we will be pulling data from APIs and displaying data like these blog posts in a list.
Feel free to use the following array to .map() on: (look at the array in the file array.js inside 
  the folder components)*/



import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BlogList from "./components/BlogList"
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
