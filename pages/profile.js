import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {"user": null, "loaded": false, "displayName": "", "bio": ""};
        this.handleChange = this.handleChange.bind(this);
        this.loadedProfile = this.loadedProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const nameVal = event.target.name;
        const valueVal = event.target.value;
        this.setState({[nameVal]: valueVal})
    }

    loadedProfile(user,displayName, bio) {
        this.setState({"user":user,"loaded": true, "displayName": displayName, "bio": bio});

    }

    editProfile(event) {
        event.preventDefault();
        const dbRef = firebase.firestore().collection("Profiles").doc(this.state.user.uid).set({
            "displayName": this.state.displayName,
            "bio": this.state.bio
        }).then( () => {
            console.log("written");
            this.loadedProfile(this.state.user,this.state.displayName,this.state.bio);
        }).catch(function (error) {
            console.log(error);

        });

    }

    getUserProfile(user) {
        const db = firebase.firestore();
        const docRef = db.collection("Profiles").doc(user.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("querying doc");
                console.log(doc.data());
                this.loadedProfile(user,doc.data().displayName, doc.data().bio);

            }
            else {
                console.log("no document");
                this.loadedProfile(user,"", "")

            }
        }).catch(function (error) {
            console.log(error);
        })


    }


    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);
                this.getUserProfile(user);

            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });

    }


    render() {

        if (this.state.loaded) {

            if (this.state.user) {
                return (
                    <form>


                        <input

                            name="displayName"
                            placeholder={this.state.displayName}
                            value={this.state.displayName}
                            onChange={this.handleChange}
                        />
                        <br/><br/>
                        <input

                            name="bio"
                            placeholder={this.state.bio}
                            value={this.state.bio}
                            onChange={this.handleChange}
                        />


                        <button onClick={this.editProfile}>
                            Edit
                        </button>

                    </form>


                );
            }
            else {
                return (<h1>Not logged in</h1>)

            }
        }
        else {
            return (<h1>Loading</h1>)
        }

    }


}

export default Profile;
