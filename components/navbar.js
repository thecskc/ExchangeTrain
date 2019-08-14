import React, {Component} from "react";
import "../styling/Navbar.css";
import Link from 'next/link'


class Navbar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">

                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>

            </div>
        );
    }

}

export default Navbar;
