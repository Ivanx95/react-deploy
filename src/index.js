import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';
import NavBar from "./components/NavBar";

function App() {
  return (

  	<div>
	  	<NavBar msg="Stranger"/> 
	    <section className="section">
	     	<div className="container">
	      		<h1 className="title">Hello</h1>
	        </div>
	    </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
