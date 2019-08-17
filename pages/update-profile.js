import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"


class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {"user": null, "loaded": false, "displayName": ""};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        event.preventDefault();
        const nameVal = event.target.name;
        const valueVal = event.target.value;
        this.setState({[nameVal]: valueVal})

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

    render() {

        if(this.state.loaded) {

            if(this.state.user) {
                return (
                    <form>

                        <TextField
                            name="displayName"
                            label="Name"
                            onChange={this.handleChange}
                            value={this.state.displayName}
                        />


                    </form>
                );
            }
            else{
                return (<h1>Not logged in</h1>)

            }
        }
        else{
            return (<h1>Loading</h1>)
        }


    }

}

export default UpdateProfile;