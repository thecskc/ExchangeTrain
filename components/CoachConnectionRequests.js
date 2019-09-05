import React, {Component} from "react";
import firebase from "./firebase";
import "../styling/style.css"
import Coach from "../components/Coach"
import Button from "@material-ui/core/Button/Button";
import Router from 'next/router';


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
        this.handleResumeClick = this.handleResumeClick.bind(this);

    }

    getButtonValue(status){
        if(status === "USER_CALL_REQUEST"){
            return "Send Calendly Link"
        }
        else if(status==="COACH_MEETING"){
            return "Sent Calendly Link"
        }
        else if(status==="ISA_REQUEST"){
            return "Sent ISA Request"
        }
        else if(status==="ISA_APPROVED"){
            return "ISA Approved. The Exchange team will be in touch with next steps"
        }
    }

    handleResumeClick(event,resume){
        event.preventDefault();
        console.log(resume);
        Router.push(resume);
        //window.location.href=resume;

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
            <button className="coach-button" onClick={(event) => this.handleClick(event, status, userDoc)}>
                {this.connectionStatus[status]}
            </button>;

        if (status === "ISA_REQUEST" || status==="ISA_APPROVED") {
            button = <br/>
        }

        return (<div className="card" style={{"justifyContent":"space-around"}} key={userDoc.id}>

                <div className="heading-2">
                    {heading}
                </div>

                <div className="subheading-2">
                    {subheading}
                </div>
                <div style={{color:"green"}}className="subheading-2">
                    {this.getButtonValue(status)}
                </div>

                <div className="paragraph">
                    {paragraph}
                </div>
                <br/>
                <Button color="primary" onClick={(event)=>{this.handleResumeClick(event,userDoc.data().resume)}}>
                    View Resume
                </Button>

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
