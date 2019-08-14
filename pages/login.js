import React, {Component} from "react";
import "../styling/style.css"
import "../styling/rowcol.css"
import SignUp from "../components/signup";
import Navbar from "../components/navbar"


class Login extends Component {
    render() {
        return (

            <div className="container">
                <Navbar/>

                <div className="col-center">
                    <SignUp style={{alignSelf:"center"}}/>
                </div>


            </div>
        )
    }

}


export default Login;