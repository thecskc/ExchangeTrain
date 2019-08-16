import React, {Component} from "react";
import firebase from "../components/firebase";


class Success extends Component {
    render() {

        const user = firebase.auth().currentUser;
        console.log(user);
        if (user) {
            return (

                <>
                    <h1>Welcome</h1>


                </>
            )

        }
        else {
            return (
                <>
                    <h1>Leave you are not welcome</h1>
                </>
            )
        }


    }

}


export default Success;