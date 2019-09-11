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

                    <Link href="/"><a>Home</a></Link>
                    <Link href="/connections"><a>Connections</a></Link>
                    <Link href="/profile"><a>Profile</a></Link>
                    <Link href="/coaches"><a>Coaches</a></Link>
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
