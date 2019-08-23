import React, {Component} from "react";
import firebase from "../components/firebase";
import Router from 'next/router';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"


class Coach extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="card">

                <div className="heading-2">
                    {this.props.name}
                </div>

                <div className="subheading-2">
                    {this.props.company}
                </div>

                <div className="paragraph">
                    {this.props.bio}
                </div>


            </div>


        )
    }


}


export default Coach;