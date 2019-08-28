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


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "showDialog": false
        };
        this.performedAction = this.performedAction.bind(this);
    }

    handleDialogClose(event) {
        event.preventDefault();
        this.setState({"showDialog": false});
    }


    userInitialCallRequestsFunc(){

    }

    userISAApprovalFunc(){

    }

    coachCallRequestsFunc(){
        const dbRef = firebase.firestore().collection("CallRequests").where("coach","==",this.props.user.uid);

    }

    coachISAApprovalsFunc(){

    }

    performedAction(event) {

        this.props.performedAction(event);

    }

    render() {

        let dialogShow;
        if (this.state.showDialog) {
            dialogShow = <>
                <Dialog open={this.state.showDialog} onClose={this.handleDialogClose}>
                    <DialogTitle>{this.props.dialogTitle} </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.dialogContent}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </>
        }

        return (
            <>
                {dialogShow}
                <div className="card">

                    <div className="heading-2">
                        {this.props.heading}
                    </div>

                    <div className="subheading-2">
                        {this.props.subheading}
                    </div>

                    <div className="paragraph">
                        {this.props.paragraph}
                    </div>

                    <button onClick={this.performedAction}>
                        {this.props.CTA}
                    </button>


                </div>
            </>


        )
    }


}

export default Card;