import React, {Component} from "react";
import "../styling/Navbar.css";
import Link from 'next/link'
import Router from "next/router";
import firebase from "../components/firebase";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "signedOut":false
        };
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(event, path){
        event.preventDefault();
        window.location.href = path;

    }
    handleSignOut(event) {

        event.preventDefault();
        firebase.auth().signOut().then(
            this.setState({"signedOut":true})
        );

    }

    render() {


        if (this.props.user) {
            return (
                <div className="topnav" id="myTopnav">

                    <div onClick={(event)=>this.handleClick(event,"/")}>Home</div>
                    <div onClick={(event)=>this.handleClick(event,"/connections")}>Connections</div>
                    <div onClick={(event)=>this.handleClick(event,"/profile")}>Profile</div>
                    <div onClick={(event)=>this.handleClick(event,"/coaches")}>Coaches</div>
                    <div onClick={this.handleSignOut}>Sign Out</div>


                </div>
            );
        }
        else {
            return (
                <div className="topnav" id="myTopnav">

                    <div onClick={(event)=>this.handleClick(event,"/")}>Home</div>
                    <div onClick={(event)=>this.handleClick(event,"/login")}>Sign In/Sign Up</div>


                </div>
            );
        }


    }

}

export default Navbar;
