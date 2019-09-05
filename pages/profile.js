import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import Navbar from "../components/navbar";
import Loader from "../components/Loader"
import * as isurl from "valid-url"


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
            "calendlylink": "",
            "resume": ""
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

    validateForm() {
        let error = "";


        if (!this.state.displayName) {
            error += " Please add your name.";
        }
        if (!this.state.bio) {
            error += " Please add your bio.";
        }
        if (!this.state.schoolcompany) {
            error += " Please list your school or company.";
        }
        if (!this.state.location) {
            error += " Please enter your location."
        }
        if (!this.state.resume) {
            error += " Please add a link to your resume."
        }
        else{

            if(isurl.is_web_uri(this.state.resume)){
                console.log("checking valid url")
                error += "Please enter a valid URL for your resume";
            }
        }

        if (this.state.isCoach) {
            if (!this.state.calendlylink) {
                error += " Please add your calendly link"
            }

        }

        if (error) {
            alert(error);
            return false;
        }
        else {
            return true;
        }


    }

    settingData() {


        const setMap = {
            "displayName": this.state.displayName,
            "bio": this.state.bio,
            "location": this.state.location,
            "schoolcompany": this.state.schoolcompany,
            "resume": this.state.resume
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

        if (this.validateForm()) {

            this.handleAccessCode();

            const dbRef = firebase.firestore().collection("Profiles").doc(this.state.user.uid).set(this.settingData()).then(() => {
                console.log("written");
                const userProfile = {
                    "user": this.state.user,
                    "displayName": this.state.displayName,
                    "bio": this.state.bio,
                    "location": this.state.location,
                    "schoolcompany": this.state.schoolcompany,
                    "resume": this.state.resume

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
                    "loaded": true,
                    "resume": doc.data().resume
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
                    "loaded": true,
                    "resume": ""
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

                    <>
                        <Navbar user={this.state.user}/>

                        <div className="container" style={{"justify-content": "center"}}>


                            <div className="page-heading" style={{"align-self": "center"}}>Fill Out Your Profile</div>

                            <div className="card-section" style={{"align-self": "center"}}>
                                <div className="card" style={{"width": "80vw", "height": "80vh"}}>
                                    <form>


                                        <TextField

                                            name="displayName"
                                            placeholder="Enter Name"
                                            value={this.state.displayName}
                                            onChange={this.handleChange}
                                        />
                                        <br/><br/>

                                        <TextField
                                            name="schoolcompany"
                                            placeholder="School/Company"
                                            value={this.state.schoolcompany}
                                            onChange={this.handleChange}
                                        />

                                        <br/><br/>

                                        <TextField
                                            name="location"
                                            placeholder="Location"
                                            value={this.state.location}
                                            onChange={this.handleChange}
                                        />


                                        <br/><br/>


                                        <TextField

                                            name="bio"
                                            placeholder="Bio"
                                            value={this.state.bio}
                                            onChange={this.handleChange}
                                            multiline={true}
                                            rows="4"
                                            rowsMax="7"
                                            style={{width: "100%"}}
                                        />

                                        <br/><br/>


                                        <TextField

                                            name="resume"
                                            placeholder="Resume URL"
                                            value={this.state.resume}
                                            onChange={this.handleChange}

                                        />


                                        <br/><br/>

                                        <TextField
                                            name="coachcode"
                                            placeholder="Coach Access Code"
                                            value={this.state.coachcode}
                                            onChange={this.handleChange}
                                        />

                                        <br/><br/>

                                        {(() => {

                                            if (this.state.isCoach) {
                                                return (

                                                    <TextField
                                                        name="calendlylink"
                                                        placeholder="Enter your calendly link"
                                                        value={this.state.calendlylink}
                                                        onChange={this.handleChange}
                                                    />
                                                )
                                            }


                                        })()}


                                        <br/><br/>


                                        <Button color="primary" variant="contained" onClick={this.editProfile}>
                                            Save
                                        </Button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </>


                );
            }
            else {
                return (<h1>Not logged in</h1>)

            }
        }
        else {
            return (<Loader/>);
        }

    }


}

export default Profile;
