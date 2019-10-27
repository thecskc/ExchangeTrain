import React, {Component} from "react";
import firebase from "./firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import DialogComp from "./DialogComp";

class UserConnectionRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "cards": [],
            "loaded": false,
            "showDialog": false,
            "dialogTitle": "",
            "dialogContent": "",
            "noConnections":false
        };

        this.connectionStatus = {
            USER_CALL_REQUEST: "Call Request Sent",
            COACH_MEETING: "Schedule Call",
            ISA_REQUEST: "Coach Interested in ISA",
            ISA_APPROVED: "Accepted ISA"
        };

        this.getDoc = this.getDoc.bind(this);
        this.makeCard = this.makeCard.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    handleResumeClick(event, resume) {
        event.preventDefault();
        console.log(resume);
        //Router.push(resume);
        //window.location.href=resume;
        window.open(resume);

        // try {
        //     console.log("resume link", resume);
        //     Router.push(resume).catch(function(err){
        //         console.log(err);
        //     });
        // }
        // catch(e){
        //     console.log("can't forward");
        // }
    }


    handleDialogClose() {
        this.setState({"showDialog": false});
    }

    handleClick(event, status, fullDoc) {

        event.preventDefault();

        if (status === "USER_CALL_REQUEST") {
            //do Nothing

        }
        else if (status === "COACH_MEETING") {

            //Redirect to calendly link
            const calendlyLink = fullDoc.data().calendlylink;
            console.log("calendly link, " + calendlyLink);
            window.open(calendlyLink);


        }
        else if (status === "ISA_REQUEST") {
            //go into ISA agreement

            const userID = this.props.user.uid;
            const coachID = fullDoc.id;
            const fb = firebase.firestore().collection("Connections").doc(userID + "_" + coachID).set({
                "status": "ISA_APPROVED"
            }, {merge: true});

            this.setState({
                "showDialog": true,
                "dialogTitle": "Approved ISA Request",
                "dialogContent": "The Exchange Team will be in touch " +
                    "shortly with further instructions"
            });

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
                        "coach": doc.data().coach,
                        "user": doc.data().user,
                        "status": doc.data().status
                    };
                    coachesList.push(obj);
                });


                if (coachesList.length === 0) {
                    this.setState({"loaded":true,"noConnections": true});
                }
                else {
                    this.getDoc(coachesList).then(() => {
                        this.setState({"loaded": true});
                    })
                }
            })


    }

    getButtonValue(status) {
        if (status === "COACH_MEETING") {
            return "Click To Schedule"
        }
        else if (status === "ISA_REQUEST") {
            return "Accept ISA"
        }
    }

    makeCard(heading, subheading, status, paragraph, coachDoc) {

        console.log("Make Card function, " + coachDoc);

        let button =
            <button className="coach-button" onClick={(event) => this.handleClick(event, status, coachDoc)}>
                {this.getButtonValue(status)}
            </button>;

        if (status === "USER_CALL_REQUEST" || status === "ISA_APPROVED") {
            button = <br/>
        }

        return (
            <div className="card" style={{"justifyContent": "space-around"}} key={coachDoc.id}>

                <div>
                    <div className="heading-2">
                        {heading}
                    </div>

                    <div className="subheading-2">
                        {subheading}
                    </div>

                    <div style={{color: "green"}} className="subheading-2">
                        {this.connectionStatus[status]}
                    </div>

                </div>


                <div className="paragraph">
                    {paragraph}
                </div>
                <br/>
                <Button color="primary" onClick={(event) => {
                    this.handleResumeClick(event, coachDoc.data().resume)
                }}>
                    View Resume
                </Button>

                {button}

            </div>
        );


    }

    render() {

        let dialog = <DialogComp dialog={this.state.showDialog} title={this.state.dialogTitle}
                                 content={this.state.dialogContent} handleClose={this.handleDialogClose}/>


        if (this.state.loaded) {
            if (!this.state.noConnections) {
                return (
                    <>{dialog}{this.state.cards}</>
                );
            }
            else {

                return (
                    <>
                        <div className="subheading-2">
                            Browse through coaches and request calls to see connections.
                        </div>
                    </>
                );
            }
        }
        else {
            return <br/>
        }


    }


}

export default UserConnectionRequests;