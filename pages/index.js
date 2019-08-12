import React, {Component} from "react";
import "../styling/style.css"


class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="landing-container">
                <div className="landing-hero">

                    <div className="landing-hero-left">
                        <h1 className="landing-heading">Exchange</h1>
                        <h3 className="landing-subheading">
                            Personalized training for technical interviews by software
                            engineers
                        </h3>
                        <br/>
                        <br/>
                        <div style={{alignSelf:"flex-start"}} className="landing-button">
                            Browse Coaches
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default Index;