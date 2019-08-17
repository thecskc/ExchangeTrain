import React, {Component} from "react";
import fb from "../components/firebase";
import Router from 'next/router'


import "../styling/style.css";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            authenticated: false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);


    }

    handleChange(event) {
        event.preventDefault();
        const nameVal = event.target.name;
        const valueVal = event.target.value;
        this.setState({[nameVal]: valueVal})

    }

    async handleSignUp(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.password);

        try {
            const email = this.state.email;
            const password = this.state.password;
            fb.auth().createUserWithEmailAndPassword(email, password).then(
                function () {

                    Router.push("/start");

                }).catch(function (e) {
                console.log(e);
                console.log("signup failed")
            });
        }
        catch (e) {
            console.log("oops");
        }


    }

    async handleSignIn(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.password);

        try {
            const email = this.state.email;
            const password = this.state.password;
            fb.auth().signInWithEmailAndPassword(email, password).then(function () {

                Router.push("/start");

            }).catch(function (e) {
                console.log(e);

                console.log("login failed")

            });
        }
        catch (e) {
            console.log("oops");
        }


    }


    render() {

        return (

            <form onSubmit={this.handleSubmit}>
                <input

                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.email}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <input

                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.password}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <div style={{display: "inline"}} className="landing-button" onClick={this.handleSignIn}>
                    Sign In
                </div>

                <div style={{display: "inline"}} className="landing-button" onClick={this.handleSignUp}>
                    Sign Up
                </div>

            </form>


        );

    }


}

export default SignUp;