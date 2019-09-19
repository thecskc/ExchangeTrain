import React, {Component} from "react";

import SignUp from "../components/signup";
import Navbar from "../components/navbar"
import "../styling/login.css"
import "../styling/style.css"


class Login extends Component {
    render() {
        return (

            <>

                <div className="container-login" style={{alignSelf:"center"}}>
                    <br/><br/><br/>





                    <div className="logincontainer">
                        <div className="heading" style={{"color":"black"}}>Sign Up/ Log In </div>
                        <br/><br/>


                        <SignUp style={{alignSelf: "center"}}/>
                    </div>


                </div>

            </>
        )
    }

}


export default Login;