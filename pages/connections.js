import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import UserConnectionRequests from "../components/UserConnectionRequests"
import CoachConnectionRequests from "../components/CoachConnectionRequests"
import Navbar from "../components/navbar";
import Loader from "../components/Loader"

class Connections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "loaded": false,
            "user": null,
            "isCoach": false,
            "profile": false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);

                firebase.firestore().collection("Profiles").doc(user.uid).get().then((doc) => {

                    if (doc.exists) {

                        console.log(doc.data());
                        if (doc.data().isCoach) {
                            this.setState({"loaded": true, "user": user, "isCoach": true, "profile": true});
                        }
                        else {
                            this.setState({"loaded": true, "user": user, "isCoach": false, "profile": true});
                        }
                    }
                    else{
                        this.setState({"loaded":true,"user":user,"profile":false});
                    }

                })


            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });
    }

    render() {

        if (this.state.loaded) {
            if (this.state.user) {

                if(this.state.profile) {

                    if (this.state.isCoach) {

                        return (
                            <>
                                <Navbar user={this.state.user}/>


                                <div className="container">
                                    <div className="page-heading" style={{alignSelf: "center"}}>Connections</div>
                                    <div className="card-section">

                                        {<CoachConnectionRequests user={this.state.user}/>}
                                    </div>


                                </div>
                            </>
                        )

                    }
                    else {
                        return (
                            <>
                                <Navbar user={this.state.user}/>

                                <div className="container">
                                    <div className="page-heading" style={{alignSelf: "center"}}>Connections</div>

                                    <div className="card-section">

                                        <UserConnectionRequests user={this.state.user}/>

                                    </div>
                                </div>
                                <br/>


                            </>
                        )

                    }
                }
                else{
                    return(<h1>Please fill out your profile first</h1>);
                }

            }

            else {
                return (<h1>Not Logged In</h1>)
            }
        }
        else {
            return (<Loader/>);
        }


    }
}

export default Connections;

