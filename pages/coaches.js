import React, {Component} from "react";
import firebase from "../components/firebase";
import "../styling/coaches.css"
import "../styling/style.css"
import Coach from "../components/Coach"
import Navbar from "../components/navbar";
import Loader from "../components/Loader"
import LoggedOut from "../components/loggedout"

class Coaches extends Component {

    constructor(props) {
        super(props);

        this.getCoaches = this.getCoaches.bind(this);

        this.state = {
            "loadedCoaches": false,
            "loaded": false,
            "user": null,
            "profile":false

        };
        this.coaches = [];

        console.log("constructor called");


    }

    getCoaches() {


        const coachesRef = firebase.firestore().collection("Profiles").where("isCoach", "==", true).get()
            .then((snapshot) => {

                let count = 1;
                snapshot.forEach(
                    (doc) => {
                        this.coaches.push(
                            <Coach
                                key={doc.id}
                                coachid={doc.id}
                                name={doc.data().displayName}
                                bio={doc.data().bio}
                                company={doc.data().schoolcompany}
                                location={doc.data().location}
                                resume={doc.data().resume}
                                userid={this.state.user.uid}
                            />
                        );

                    });

                console.log("Coaches list");
                console.log(this.coaches);
                console.log(this.coaches.length);

                this.setState({"loadedCoaches": true});


            });


    }

    componentDidMount() {


        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);

                firebase.firestore().collection("Profiles").doc(user.uid).get().then((doc)=>{
                    if(doc.exists){
                        this.setState({"loaded": true, "user": user,"profile":true});
                        this.getCoaches();
                    }
                    else{
                        this.setState({"loaded": true, "user": user,"profile":false});
                    }
                })



            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });


    }

    render() {

        if (this.state.loaded) {
            if (this.state.user) {
                if(this.state.profile) {

                    if (this.state.loadedCoaches) {
                        return (

                            <>
                                <Navbar user={this.state.user}/>
                                <div className="coaches-container">


                                    <div className="page-heading" style={{"alignSelf": "center"}}>Coaches</div>

                                    <div className="card-section">
                                        {this.coaches}
                                    </div>


                                </div>
                            </>
                        );

                    }
                    else {


                        return (<Loader/>);

                    }
                }
                else{
                    return(<h1>Please fill out your profile first</h1>);
                }
            }
            else {
                return (<LoggedOut/>)
            }
        }
        else {
            return (
                <Loader/>
            )
        }
    }


}


export default Coaches;