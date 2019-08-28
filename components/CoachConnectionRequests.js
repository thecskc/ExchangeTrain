import React, {Component} from "react";
import firebase from "./firebase";
import "../styling/coaches.css"
import "../styling/style.css"
import Coach from "../components/Coach"

class CoachConnectionRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "cards": [],
            "loaded": false
        };

        this.connectionStatus = {
            USER_CALL_REQUEST: "Approve Call Request",
            COACH_MEETING: "Send ISA Request",
            ISA_REQUEST: "Send ISA Request",
            ISA_APPROVED: "Approved ISA"
        };

        this.getDoc = this.getDoc.bind(this);
        this.makeCard = this.makeCard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event, status, userDoc) {

        event.preventDefault();

        if (status === "USER_CALL_REQUEST") {
            //when clicked send calendly link to user
            const coachID = this.props.user.uid;
            const userID = userDoc.id;
            const fb = firebase.firestore().collection("Connections").doc(userID + "_" + coachID).set({
                "status": "COACH_MEETING"
            }, {merge: true});

        }
        else if (status === "COACH_MEETING") {

            //when clicked send isa request
            const coachID = this.props.user.uid;
            const userID = userDoc.id;
            const fb = firebase.firestore().collection("Connections").doc(userID + "_" + coachID).set({
                "status": "ISA_REQUEST"
            }, {merge: true});


        }
        else if (status === "ISA_APPROVED") {

            //Show ISA has been approved

        }

    }

    async getDoc(userList) {
        for (let i = 0; i < userList.length; i++) {
            const doc = await firebase.firestore().collection("Profiles").doc(userList[i].user).get();
            this.state.cards.push(this.makeCard(doc.data().displayName, doc.data().schoolcompany, userList[i].status, doc.data().bio, doc));
        }
    }


    componentDidMount() {

        let userList = [];

        const callReqRef = firebase.firestore().collection("Connections").where("coach", "==", this.props.user.uid).get()
            .then((snapShot) => {
                snapShot.forEach((doc) => {
                    const obj = {
                        "coach": doc.data().coach,
                        "user": doc.data().user,
                        "status": doc.data().status
                    };
                    userList.push(obj);
                });

                this.getDoc(userList).then(() => {
                    this.setState({"loaded": true});
                })
            })


    }

    makeCard(heading, subheading, status, paragraph, userDoc) {

        let button =
            <button onClick={(event) => this.handleClick(event, status, userDoc)}>
                {this.connectionStatus[status]}
            </button>;

        if (status === "USER_CALL_REQUEST") {
            button = <br/>
        }

        return (<div className="card" key={userDoc.id}>

                <div className="heading-2">
                    {heading}
                </div>

                <div className="subheading-2">
                    {subheading}
                </div>
                <div className="subheading-2">
                    {this.connectionStatus[status]}
                </div>

                <div className="paragraph">
                    {paragraph}
                </div>

                {button}

            </div>
        );


    }

    render(){
        if (this.state.loaded) {
            return (
                <>{this.state.cards}</>
            );
        }
        else {
            return <br/>
        }
    }
}

export default CoachConnectionRequests;
