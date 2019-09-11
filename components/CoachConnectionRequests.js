import React, {Component} from "react";
import firebase from "./firebase";
import "../styling/style.css"
import Coach from "../components/Coach"
import Button from "@material-ui/core/Button/Button";
import Router from 'next/router';
import DialogComp from "./DialogComp";


class CoachConnectionRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "cards": [],
            "loaded": false,
            "showDialog": false,
            "dialogTitle": "",
            "dialogContent": "",
            "noConnections": false
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
        this.handleResumeClick = this.handleResumeClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);


    }

    getButtonValue(status) {
        if (status === "USER_CALL_REQUEST") {
            return "Send Calendly Link"
        }
        else if (status === "COACH_MEETING") {
            return "Sent Calendly Link"
        }
        else if (status === "ISA_REQUEST") {
            return "Sent ISA Request"
        }
        else if (status === "ISA_APPROVED") {
            return "ISA Approved. The Exchange team will be in touch with next steps"
        }
    }

    handleDialogClose() {
        this.setState({"showDialog": false});
    }

    handleResumeClick(event, resume) {
        event.preventDefault();
        console.log(resume);
        //Router.push(resume);
        //window.location.href=resume;
        window.open(resume);

        // try {
        //     Router.replace(resume).catch(function(err){
        //         console.log(err);
        //     });
        // }
        // catch(e){
        //     console.log("couldn't process request");
        // }
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
            this.setState({
                "showDialog": true,
                "dialogTitle": "Sent Calendly Link",
                "dialogContent": "When the user schedules a call with you, " +
                    "you will receive a notification"
            });

        }
        else if (status === "COACH_MEETING") {

            //when clicked send isa request
            const coachID = this.props.user.uid;
            const userID = userDoc.id;
            const fb = firebase.firestore().collection("Connections").doc(userID + "_" + coachID).set({
                "status": "ISA_REQUEST"
            }, {merge: true});

            this.setState({
                "showDialog": true,
                "dialogTitle": "Sent ISA Request",
                "dialogContent": "When the user accepts your ISA request, " +
                    "the Exchange team will get in touch with further instructions."
            });

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
                if (userList.length === 0) {
                    this.setState({"loaded":true,"noConnections": true});
                }
                else {
                    this.getDoc(userList).then(() => {
                        this.setState({"loaded": true});
                    })
                }


            })


    }

    makeCard(heading, subheading, status, paragraph, userDoc) {

        let button =
            <button className="coach-button" onClick={(event) => this.handleClick(event, status, userDoc)}>
                {this.connectionStatus[status]}
            </button>;

        if (status === "ISA_REQUEST" || status === "ISA_APPROVED") {
            button = <br/>
        }

        return (<div className="card" style={{"justifyContent": "space-around"}} key={userDoc.id}>

                <div>
                    <div className="heading-2">
                        {heading}
                    </div>

                    <div className="subheading-2">
                        {subheading}
                    </div>

                    <div style={{color: "green"}} className="subheading-2">
                        {this.getButtonValue(status)}
                    </div>
                </div>


                <div className="paragraph">
                    {paragraph}
                </div>
                <br/>
                <Button color="primary" onClick={(event) => {
                    this.handleResumeClick(event, userDoc.data().resume)
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
                            When users request calls with you, you will see connections.
                        </div>
                    </>
                );
            }
        }
        else {
            return (
                <br/>
            );
        }
    }
}

export default CoachConnectionRequests;
