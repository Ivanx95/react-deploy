import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';
import NavBarItem from './NavBarItem.js';

export default class NavBar extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			value:1
		};
	}
	render(){
		return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
	      <div className="navbar-brand">
	        <a className="navbar-item" href="https://smers.sse.codesandbox.io/">
	          <img
	            src="https://smers.sse.codesandbox.io/dna.png"
	            width="40"
	            height="28"
	          />
	        </a>

	        <a
	          role="button"
	          className="navbar-burger burger"
	          aria-label="menu"
	          aria-expanded="false"
	          data-target="navbarBasicExample"
	        >
	          <span aria-hidden="true"></span>
	          <span aria-hidden="true"></span>
	          <span aria-hidden="true"></span>
	        </a>
	      </div>

	      <div id="navbarBasicExample" className="navbar-menu">
	        <div className="navbar-start">

	          <NavBarItem  onClick={() => this.handleClick()} msg="Documentation"  ></NavBarItem>
	            
	           <NavBarItem onClick={() => this.handleClick()} msg={this.state.value}/>
	          
	        </div>

	        <div className="navbar-end">
	          <div className="navbar-item">
	            <div className="buttons">
	             
	              <a className="button is-light"   onClick={() => this.handleClick()}>
	                Log off
	              </a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </nav>
		 );
	}

	handleClick(){
		this.setState({value: this.state.value+1});
	}

}
