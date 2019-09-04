import React, {Component} from "react";
import firebase from "../components/firebase";
import "../styling/coaches.css"
import "../styling/style.css"
import Coach from "../components/Coach"
import Navbar from "../components/navbar";
import Loader from "../components/Loader"

class Coaches extends Component {

    constructor(props) {
        super(props);

        this.getCoaches = this.getCoaches.bind(this);

        this.state = {
            "loadedCoaches": false,
            "loaded": false,
            "user": null

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
        this.getCoaches();


        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);
                this.setState({"loaded": true, "user": user});
            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });


    }

    render() {

        if (this.state.loaded) {
            if (this.state.user) {

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
            else {
                return (<h1>Not Logged In</h1>)
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