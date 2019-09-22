import React, {Component} from "react";
import fb from "../components/firebase";
import Router from 'next/router'
import TextField from "@material-ui/core/TextField"
import "../styling/material-components-web.min.css";


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

                    Router.push("/profile");

                }).catch(function (e) {
                console.log(e);
                alert(e.message);
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

                Router.push("/profile");

            }).catch(function (e) {
                console.log(e);

                console.log("login failed");
                alert(e.message);


            });
        }
        catch (e) {
            console.log("oops");
        }


    }


    render() {

        return (

            <>

                <form onSubmit={this.handleSubmit} style={{"width": "55%"}}>
                    <TextField

                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{"width": "100%"}}
                    />
                    <br/><br/>
                    <TextField

                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}

                        style={{"width": "100%"}}
                    />
                    <br/><br/>


                </form>

                <div className="row" style={{justifyContent: "center"}}>
                    <button className="mdc-button mdc-button--raised"
                            style={{"background": "#2962ff"
                                    ,"margin-right":"5vw"}} onClick={this.handleSignIn}>
                        <span className="mdc-button__label">Sign In</span>
                    </button>
                    <button className="mdc-button mdc-button--raised"
                            style={{"background": "#2962ff"}} onClick={this.handleSignUp}>
                        <span className="mdc-button__label">Sign Up</span>
                    </button>

                    <br/><br/>


                </div>
            </>


        );

    }


}

export default SignUp;