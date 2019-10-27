import React, {Component} from "react";
import "../styling/style.css"
import Navbar from "../components/navbar"
import firebase from "../components/firebase";
import Link from 'next/link'
import Router from "next/router";




class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "loaded":false,
            "user":null
        };
        this.handleGetStartedClick = this.handleGetStartedClick.bind(this);
    }

    handleGetStartedClick(event){
        window.location.href = "/login";
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);
                this.setState({"loaded": true, "user": user});
            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });
    }

    render() {

        return (
            <>
                <Navbar user={this.state.user}/>

                <div className="container" style={{"padding":"0px"}}>

                    <div className="hero">

                        <div className="section-50-column">
                            <div className="heading" style={{alignSelf:"flex-start"}}>Connect And Train</div>
                            <div className="subheading">
                                Sign Up/Login to browse through coaches, connect with them, and get trained.
                            </div>
                            <br/>
                            <br/>
                            <button onClick={this.handleGetStartedClick} style={{alignSelf: "flex-start"}} className="landing-button">
                                Get Started
                            </button>
                        </div>

                        <div className="section-50-images">
                            <img src="../static/undraw_personal_goals_edgd.svg"/>
                        </div>

                    </div>


                </div>
            </>


        );
    }
}

export default Index;