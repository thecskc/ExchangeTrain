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


class LoggedOut extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        window.location.href = "/login";
    }

    render() {
        return (<div className="container" style={{"padding": "0px"}}>

                <div className="hero"
                     style={{"flex-direction": "column", justifyContent: "center", alignItems: "center"}}>

                    <div className="heading">You are logged out!</div>
                    <div className="subheading">
                        Sign In/ Sign Up for access.
                    </div>
                    <br/><br/>
                    <button onClick={this.handleClick}
                            className="landing-button" style={{width:"10vw",height:"10vh",padding:"0px"}}>
                        Sign Up/ Sign In
                    </button>


                    <br/>
                    <br/>


                </div>

            </div>
        );
    }

}


export default LoggedOut;