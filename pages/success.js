import React, {Component} from "react";
import firebase from "../components/firebase";


class Success extends Component {

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
                return <h1>Leave</h1>
            }

        }
        else {
            return <h1>Loading</h1>
        }


    }

}


export default Success;