import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import redirect from "nextjs-redirect"

class UserConnectionRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "cards": [],
            "loaded": false
        };

        this.connectionStatus = {
            USER_CALL_REQUEST: "Call Request Sent",
            COACH_MEETING: "Call Request Approved",
            ISA_REQUEST: "ISA Request",
            ISA_APPROVED: "Approved ISA"
        };

        this.getDoc = this.getDoc.bind(this);
        this.makeCard = this.makeCard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, status, fullDoc) {

        event.preventDefault();

        if (status === "USER_CALL_REQUEST") {
            //do Nothing

        }
        else if (status === "COACH_MEETING") {

            //Redirect to calendly link
            const calendlyLink = fullDoc.data().calendlylink;
            console.log("calendly link, "+calendlyLink);
            Router.push(calendlyLink);


        }
        else if (status === "ISA_REQUEST") {
            //go into ISA agreement

            const userID = this.props.user.uid;
            const coachID = fullDoc.id;
            const fb = firebase.firestore().collection("Connections").doc(userID + "_" + coachID).set({
                "status": "ISA_APPROVED"
            }, {merge: true});

        }

    }

    async getDoc(coachesList) {
        for (let i = 0; i < coachesList.length; i++) {
            const doc = await firebase.firestore().collection("Profiles").doc(coachesList[i].coach).get();
            this.state.cards.push(this.makeCard(doc.data().displayName, doc.data().schoolcompany, coachesList[i].status, doc.data().bio, doc));
        }
    }

    componentDidMount() {

        let coachesList = [];

        const callReqRef = firebase.firestore().collection("Connections").where("user", "==", this.props.user.uid).get()
            .then((snapShot) => {
                snapShot.forEach((doc) => {
                    const obj = {
                        "coach":doc.data().coach,
                        "user":doc.data().user,
                        "status":doc.data().status
                    };
                    coachesList.push(obj);
                });

                this.getDoc(coachesList).then(() => {
                    this.setState({"loaded": true});
                })
            })


    }

    makeCard(heading, subheading, status, paragraph, coachDoc) {

        let button =
            <button className="coach-button" onClick={(event) => this.handleClick(event, status, coachDoc)}>
                {this.connectionStatus[status]}
            </button>;

        if (status === "USER_CALL_REQUEST") {
            button = <br/>
        }

        return (<div className="card" key={coachDoc.id}>

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

    render() {

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

export default UserConnectionRequests;