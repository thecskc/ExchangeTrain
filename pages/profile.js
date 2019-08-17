import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {"user": null, "loaded": false};
        this.uid = -1;
    }


    getUserProfile(){

    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({"user": user, "loaded": true});
                this.uid = user.uid;

            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });
    }


    render(){






    }


}
