import React, {Component} from "react";
import "../styling/style.css"
import SignUp from "../components/signup";



class Login extends Component{
    render() {
        return (

            <div className="container">

            <SignUp style={{alignSelf:"center"}}/>
            </div>
        )
    }

}


export default Login;