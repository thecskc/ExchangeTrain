import React, {Component} from "react";
import "../styling/Navbar.css";
import Link from 'next/link'
import Router from "next/router";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignOut = this.handleSignOut.bind(this);

    }

    handleSignOut(event) {

        event.preventDefault();

    }

    render() {

        if (this.props.user) {
            return (
                <div className="topnav" id="myTopnav">

                    <Link href="/">Home</Link>
                    <button onClick={this.handleSignOut}>Sign Out</button>
                    <Link href="/connections">Connections</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/coaches">Coaches</Link>

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
