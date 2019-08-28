import React, {Component} from "react";
import "../styling/style.css"
import Navbar from "../components/navbar"
import firebase from "../components/firebase";


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "loaded":false,
            "user":null
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                console.log("user");
                console.log(user);
                this.setState({"loaded": true, "user": user});
            }
            else {
                this.setState({"loaded": true, "user": null});
            }
        });
    }

    render() {

        return (
            <>
                <Navbar user={this.state.user}/>

                <div className="container">

                    <div className="hero">

                        <div className="section-40-column">
                            <div className="heading">Exchange</div>
                            <div className="subheading">
                                Personalized training for technical interviews by software
                                engineers
                            </div>
                            <br/>
                            <br/>
                            <div style={{alignSelf: "flex-start"}} className="landing-button">
                                Browse Coaches
                            </div>
                        </div>

                        <div className="section-60-images">
                            <img src="../static/undraw_code_review_l1q9%20(1).svg"/>
                        </div>

                    </div>


                </div>
            </>


        );
    }
}

export default Index;