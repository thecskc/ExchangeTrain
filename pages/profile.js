import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"


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
            "location": "",
            "isCoach": false,
            "calendlylink": ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadedProfile = this.loadedProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.handleAccessCode = this.handleAccessCode.bind(this);

    }


    handleAccessCode() {


        console.log("env code");
        console.log(process.env.COACH_CODE);

        if (this.state.coachcode === process.env.COACH_CODE.toString()) {
            this.setState({"coachcode": this.state.coachcode, "isCoach": true})
        }
        else {
            this.setState({"coachcode": this.state.coachcode, "isCoach": false})
        }


    }

    handleChange(event) {
        event.preventDefault();
        const nameVal = event.target.name;
        const valueVal = event.target.value;
        this.setState({[nameVal]: valueVal})
    }

    loadedProfile(inputMap) {


        const stateMap = {};

        for (const key in inputMap) {

            if (inputMap.hasOwnProperty(key)) {
                stateMap[key] = inputMap[key];
            }
        }

        console.log("loading profile setting state");

        console.log(stateMap);
        this.setState(
            stateMap
        );

    }

    settingData() {


        const setMap = {
            "displayName": this.state.displayName,
            "bio": this.state.bio,
            "location": this.state.location,
            "schoolcompany": this.state.schoolcompany
        };

        if (this.state.isCoach) {
            setMap["isCoach"] = true;
            setMap["coachcode"] = this.state.coachcode;
            setMap["calendlylink"] = this.state.calendlylink;
        }

        return setMap;
    }

    editProfile(event) {
        event.preventDefault();


        this.handleAccessCode();

        const dbRef = firebase.firestore().collection("Profiles").doc(this.state.user.uid).set(this.settingData()).then(() => {
            console.log("written");
            const userProfile = {
                "user": this.state.user,
                "displayName": this.state.displayName,
                "bio": this.state.bio,
                "location": this.state.location,
                "schoolcompany": this.state.schoolcompany

            };
            if (this.state.isCoach) {
                userProfile["isCoach"] = true;
                userProfile["coachcode"] = this.state.coachcode;
                userProfile["calendlylink"] = this.state.calendlylink;
            }
            this.loadedProfile(userProfile);
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

                const userProfile = {
                    "user": user,
                    "displayName": doc.data().displayName,
                    "bio": doc.data().bio,
                    "location": doc.data().location,
                    "schoolcompany": doc.data().schoolcompany,
                    "loaded": true
                };

                if (doc.data().isCoach) {
                    userProfile["isCoach"] = true;
                    userProfile["coachcode"] = doc.data().coachcode;
                    userProfile["calendlylink"] = doc.data().calendlylink;
                }
                this.loadedProfile(userProfile);

            }
            else {
                console.log("no document");
                const userProfile = {
                    "user": user,
                    "displayName": "",
                    "bio": "",
                    "location": "",
                    "schoolcompany": "",
                    "loaded": true
                };
                this.loadedProfile(userProfile)

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

                    <div className="container" style={{"justify-content":"center"}}>

                        <h1 style={{"align-self":"center"}}>Fill Out Your Profile</h1>

                        <div className="card-section" style={{"align-self":"center"}}>
                            <div className="card">
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
                                        value={this.state.coachcode}
                                        onChange={this.handleChange}
                                    />

                                    <br/><br/>

                                    {(() => {

                                        if (this.state.isCoach) {
                                            return (

                                                <input
                                                    name="calendlylink"
                                                    placeholder="Enter your calendly link"
                                                    value={this.state.calendlylink}
                                                    onChange={this.handleChange}
                                                />
                                            )
                                        }


                                    })()}


                                    <br/><br/>

                                    <button onClick={this.editProfile}>
                                        Edit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>


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
