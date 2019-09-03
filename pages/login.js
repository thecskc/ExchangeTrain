import React, {Component} from "react";

import SignUp from "../components/signup";
import Navbar from "../components/navbar"
import "../styling/login.css"


class Login extends Component {
    render() {
        return (

            <>
                <Navbar/>

                <div className="container-login" style={{alignSelf:"center"}}>
                    <div className="page-heading">Sign Up or Log In </div>
                    <br/><br/><br/>





                    <div className="logincontainer">
                        <SignUp style={{alignSelf: "center"}}/>
                    </div>


                </div>

            </>
        )
    }

}


export default Login;