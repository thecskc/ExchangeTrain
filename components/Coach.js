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


class Coach extends Component {

    constructor(props) {
        super(props);
        this.sendInterest = this.sendInterest.bind(this);
        this.state = {"showDialog": false};
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);

    }

    handleDialogClose(event) {
        event.preventDefault();
        this.setState({"showDialog": false});
    }


    handleResumeClick(event, resume) {
        event.preventDefault();
        console.log("resume", resume);

        //window.location.href = resume;
        window.open(resume);
        // try {
        //
        //     window.location.replace(resume);
        //     Router.replace(resume).catch(function(err){
        //         console.log(err);
        //     });
        // }
        // catch(e){
        //     console.log("couldn't process request");
        // }
    }

    sendInterest(event) {
        event.preventDefault();

        if (this.props.coachid !== this.props.userid) {
            const dbRef = firebase.firestore().collection("Connections").doc(this.props.userid + "_" + this.props.coachid).set({
                "user": this.props.userid,
                "coach": this.props.coachid,
                "status": "USER_CALL_REQUEST"

            }).then(() => {
                this.setState({"showDialog": true});
            })
        }

    }

    render() {

        console.log(this.props.name + "'s id is " + this.props.id);
        let dialogShow;
        if (this.state.showDialog) {
            dialogShow = <>
                <Dialog open={this.state.showDialog} onClose={this.handleDialogClose}>
                    <DialogTitle>Your Request Has Been Sent </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This coach will respond after reviewing your profile
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </>
        }

        return (
            <>
                {dialogShow}
                <div className="card" style={{"justifyContent": "space-between"}}>

                    <div>
                        <div className="heading-2">
                            {this.props.name}
                        </div>


                        <div className="subheading-2">
                            {this.props.company + ", " + this.props.location}
                        </div>

                        <div className="subheading-2">
                            {this.props.area_of_training}
                        </div>

                    </div>

                    <br/><br/>

                    <div className="paragraph">
                        {this.props.bio}
                    </div>

                    <br/><br/>

                    <Button color="primary" onClick={(event) => {
                        this.handleResumeClick(event, this.props.resume)
                    }}>
                        View Resume
                    </Button>

                    <br/>

                    <button className="coach-button" onClick={this.sendInterest}>
                        Connect
                    </button>


                </div>
            </>


        )
    }


}


export default Coach;