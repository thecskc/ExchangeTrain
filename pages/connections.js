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

class Connections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "loaded": false,
            "user": null,
            "isCoach": false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);

                firebase.firestore().collection("Profiles").doc(user.uid).get().then((doc) => {

                    console.log(doc.data());
                    if (doc.data().isCoach) {
                        this.setState({"loaded": true, "user": user, "isCoach": true});
                    }
                    else {
                        this.setState({"loaded": true, "user": user, "isCoach": false});
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

                if (this.state.isCoach) {

                    return (
                        <>
                            <Navbar/>
                            {<CoachConnectionRequests user={this.state.user}/>}
                        </>
                    )

                }
                else {
                    return (
                        <>
                            <Navbar/>
                            <h1>Connection Requests</h1>
                            <UserConnectionRequests user={this.state.user}/>
                            <br/>


                        </>
                    )

                }

            }
            else {
                return (<h1>Not Logged In</h1>)
            }
        }
        else {
            return (<h1>Loading</h1>)
        }


    }
}

export default Connections;
