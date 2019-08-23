import React, {Component} from "react";
import firebase from "../components/firebase";
import "../styling/style.css"




class Coaches extends Component{

    constructor(props){
        super(props);

    }


    render(){

        return(

            <div className="container">

                <div className="card-section">

                    <div className="card">

                        <h2>Step 2: Pick your payment plan</h2>
                        <br/>

                        <h4>
                            Pay Per Session - Pick your coach, the number of sessions and
                            pay their hourly rate!
                        </h4>
                        <br/>
                        <h4>
                            Income Sharing Agreement (ISA) - Apply to be trained for free
                            and pay if and when you get a job!{" "}
                        </h4>

                        <p>
                            For more info about payment methods check out
                        </p>
                    </div>

                    <div className="card">

                        <h2>Step 2: Pick your payment plan</h2>
                        <br/>

                        <h4>
                            Pay Per Session - Pick your coach, the number of sessions and
                            pay their hourly rate!
                        </h4>
                        <br/>
                        <h4>
                            Income Sharing Agreement (ISA) - Apply to be trained for free
                            and pay if and when you get a job!{" "}
                        </h4>

                        <p>
                            For more info about payment methods check out
                        </p>
                    </div>

                    <div className="card">

                        <h2>Step 2: Pick your payment plan</h2>
                        <br/>

                        <h4>
                            Pay Per Session - Pick your coach, the number of sessions and
                            pay their hourly rate!
                        </h4>
                        <br/>
                        <h4>
                            Income Sharing Agreement (ISA) - Apply to be trained for free
                            and pay if and when you get a job!{" "}
                        </h4>

                        <p>
                            For more info about payment methods check out
                        </p>
                    </div>


                </div>



            </div>



        )
    }

}


export default Coaches;