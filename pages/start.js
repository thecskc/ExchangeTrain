import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';



class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {"user": null, "loaded": false};

    }

    componentDidMount() {


        firebase.auth().onAuthStateChanged((user) => {


            if (user) {
                this.setState({"user": user, "loaded": true});

                // User is signed in.
            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });
    }

    render() {

        if (this.state.loaded === true) {
            if (this.state.user) {
                return <h1>Welcome</h1>
            }
            else {
                Router.push("/index");
                return (<h1>Not logged in</h1>);
            }

        }
        else {
            return <h6>Loading</h6>
        }


    }

}


export default Start;