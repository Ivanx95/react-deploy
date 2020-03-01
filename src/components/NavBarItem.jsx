import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';

export default class NavBarItem extends React.Component{

	constructor(){
		super();
	}
	render(){
		return (
  			<a className="navbar-item" onClick={()=> this.props.onClick()}>{this.props.msg}</a>
		);

	}
}