import React, {Component} from "react";
import firebase from "../components/firebase";
import "../styling/coaches.css"
import "../styling/style.css"
import Coach from "../components/Coach"


class Coaches extends Component {

    constructor(props) {
        super(props);

        this.getCoaches = this.getCoaches.bind(this);

        this.state = {
            "loadedCoaches": false,

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
                                key={count++}
                                name={doc.data().displayName}
                                bio={doc.data().bio}
                                company={doc.data().schoolcompany}
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
    }

    render() {


        if (this.state.loadedCoaches) {
            return (
                <div className="coaches-container">

                    <h1 style={{"alignSelf": "center"}}>Coaches</h1>

                    <div className="card-section">
                        {this.coaches}
                    </div>


                </div>
            );

        }
        else {
            return (<h1>Loading coaches</h1>);
        }
    }


}


export default Coaches;