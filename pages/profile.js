import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import Navbar from "../components/navbar";
import Loader from "../components/Loader"
import {isWebUri} from "valid-url"
import LoggedOut from "../components/loggedout";
import "../styling/material-components-web.min.css";


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
            "resume": "",
            "area_of_training":"Software Engineering"
        };
        this.handleChange = this.handleChange.bind(this);
        this.loadedProfile = this.loadedProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.handleAccessCode = this.handleAccessCode.bind(this);
        this.cutWords = this.cutWords.bind(this);

    }

    cutWords(strVal) {
        let result = strVal;
        let resultArray = result.split(" ");
        if (resultArray.length > 100) {
            resultArray = resultArray.slice(0, 100);
            result = resultArray.join(" ") + "...";
        }
        // console.log("invoked cutwords");
        return result;
    }


    handleAccessCode() {




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
        if(!this.state.area_of_training){
            error += " Please choose your area of training (data science, software engineering, etc)"
        }
        if (!this.state.resume) {
            error += " Please add a link to your resume."
        }
        else {

            if (!isWebUri(this.state.resume)) {
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
            "resume": this.state.resume,
            "area_of_training":this.state.area_of_training

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
            this.state.bio = this.cutWords(this.state.bio);

            const dbRef = firebase.firestore().collection("Profiles").doc(this.state.user.uid).set(this.settingData()).then(() => {

                const userProfile = {
                    "user": this.state.user,
                    "displayName": this.state.displayName,
                    "bio": this.state.bio,
                    "location": this.state.location,
                    "schoolcompany": this.state.schoolcompany,
                    "resume": this.state.resume,
                    "area_of_training":this.state.area_of_training

                };
                if (this.state.isCoach) {
                    userProfile["isCoach"] = true;
                    userProfile["coachcode"] = this.state.coachcode;
                    userProfile["calendlylink"] = this.state.calendlylink;
                }
                this.loadedProfile(userProfile);
                alert("Profile Saved");
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


                const userProfile = {
                    "user": user,
                    "displayName": doc.data().displayName,
                    "bio": doc.data().bio,
                    "location": doc.data().location,
                    "schoolcompany": doc.data().schoolcompany,
                    "loaded": true,
                    "resume": doc.data().resume,
                    "area_of_training":doc.data().area_of_training
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
                    "resume": "",
                    "area_of_training":"Software Engineering"
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

                        <div className="container" style={{"justify-content": "center", "padding":"16px",marginBottom:"32px"}}>


                            <div className="page-heading" style={{"align-self": "center"}}>Fill Out Your Profile</div>

                            <br/><br/>


                            <form style={{alignSelf:"center", width: "60%", height: "80%"}}>


                                <input

                                    name="displayName"
                                    placeholder="Enter Name"
                                    value={this.state.displayName}
                                    onChange={this.handleChange}
                                    style={{width: "100%"}}
                                />
                                <br/><br/><br/><br/>

                                <input
                                    name="schoolcompany"
                                    placeholder="School/Company"
                                    value={this.state.schoolcompany}
                                    onChange={this.handleChange}
                                    style={{width: "100%"}}

                                />

                                <br/><br/><br/><br/>

                                <input
                                    name="location"
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    style={{width: "100%"}}

                                />


                                <br/><br/><br/><br/>


                                <textarea

                                    name="bio"
                                    placeholder="Bio (100 words limit)"
                                    value={this.state.bio}
                                    onChange={this.handleChange}

                                    rows="4"

                                    style={{width: "100%"}}

                                />

                                <br/><br/><br/><br/>


                                <input

                                    name="resume"
                                    placeholder="Link to your resume or LinkedIn Profile"
                                    value={this.state.resume}
                                    onChange={this.handleChange}
                                    style={{width: "100%"}}


                                />

                                <br/><br/>




                                <br/><br/>

                                <div style={{ fontFamily: "Open Sans, sans-serif",
                                    fontSize:"1.4rem"}}>
                                    Choose your area of training -
                                </div>
                                <br/>


                                <select value={this.state.area_of_training} name="area_of_training" onChange={this.handleChange}>

                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Data Science">Data Science</option>

                                </select>

                                <br/><br/><br/><br/>


                                <input
                                    name="coachcode"
                                    placeholder="Coach Access Code"
                                    value={this.state.coachcode}
                                    onChange={this.handleChange}
                                    style={{width: "100%"}}

                                />
                                <br/><br/><br/><br/>





                                {(() => {


                                    if (this.state.isCoach) {
                                        return (

                                            <input
                                                name="calendlylink"
                                                placeholder="Enter your calendly link"
                                                value={this.state.calendlylink}
                                                onChange={this.handleChange}
                                                style={{width: "100%"}}

                                            />
                                        )
                                    }


                                })()}


                                <br/><br/><br/><br/>

                                <button className="mdc-button mdc-button--raised"
                                        style={{"background": "orange", "width": "100%","margin-bottom":"10vh"}} onClick={this.editProfile}>
                                    <span className="mdc-button__label">Save</span>
                                </button>

                                <br/><br/>
                                <br/><br/><br/>



                                {/*<Button color="primary" variant="contained" onClick={this.editProfile}>*/}
                                {/*Save*/}
                                {/*</Button>*/}

                            </form>

                        </div>

                    </>


                );
            }
            else {
                return (<LoggedOut/>)

            }
        }
        else {
            return (<Loader/>);
        }

    }


}

export default Profile;
