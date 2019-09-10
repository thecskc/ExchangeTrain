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

                    <Link href="/">Home</Link>
                    <Link href="/connections">Connections</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/coaches">Coaches</Link>
                    <a onClick={this.handleSignOut}>Sign Out</a>


                </div>
            );
        }
        else {
            return (
                <div className="topnav" id="myTopnav">

                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>

                </div>
            );
        }


    }

}

export default Navbar;
