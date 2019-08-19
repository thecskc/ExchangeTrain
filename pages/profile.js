import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "user": null,
            "loaded": false,
            "displayName": "",
            "bio": "",
            "coachcode": "",
            "schoolcompany": "",
            "location": ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadedProfile = this.loadedProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.handleAccessCode = this.handleAccessCode.bind(this);

    }


    handleAccessCode(event) {

        event.preventDefault();
        const valueVal = event.target.value;
        this.setState({"coachcode": valueVal})

    }

    handleChange(event) {
        event.preventDefault();
        const nameVal = event.target.name;
        const valueVal = event.target.value;
        this.setState({[nameVal]: valueVal})
    }

    loadedProfile(user, displayName, bio, location, schoolcompany) {
        this.setState(
            {
                "user": user,
                "loaded": true,
                "displayName": displayName,
                "bio": bio,
                "schoolcompany": schoolcompany,
                "location": location
            }
        );

    }

    editProfile(event) {
        event.preventDefault();




        const dbRef = firebase.firestore().collection("Profiles").doc(this.state.user.uid).set({
            "displayName": this.state.displayName,
            "bio": this.state.bio,
            "location": this.state.location,
            "schoolcompany": this.state.schoolcompany
        }).then(() => {
            console.log("written");
            this.loadedProfile(this.state.user, this.state.displayName, this.state.bio, this.state.location, this.state.schoolcompany);
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
                this.loadedProfile(user, doc.data().displayName, doc.data().bio, doc.data().location, doc.data().schoolcompany);

            }
            else {
                console.log("no document");
                this.loadedProfile(user, "", "", "", "")

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
                            placeholder="Enter Name"
                            value={this.state.displayName}
                            onChange={this.handleChange}
                        />
                        <br/><br/>

                        <input
                            name="schoolcompany"
                            placeholder="School/Company"
                            value={this.state.schoolcompany}
                            onChange={this.handleChange}
                        />

                        <br/><br/>

                        <input
                            name="location"
                            placeholder="Location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />


                        <br/><br/>


                        <input

                            name="bio"
                            placeholder="Bio"
                            value={this.state.bio}
                            onChange={this.handleChange}
                        />


                        <br/><br/>

                        <input
                            name="coachcode"
                            placeholder="Coach Access Code"
                            value=""
                            onChange={this.handleAccessCode}
                        />


                        <button onClick={this.editProfile}>
                            Edit
                        </button>

                        {(() => {

                            if (this.state.isCoach) {
                                return (


                                    <input
                                        name="calendlylink"
                                        placeholder="Enter your calendly link"
                                        value=""
                                        onChange={this.handleChange}
                                    />
                                )
                            }


                        })()}

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
