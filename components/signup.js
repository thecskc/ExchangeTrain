import React, {Component} from "react";

import "../styling/style.css";

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event){


    }

    handleSubmit(event){
        event.preventDefault();

    }

    render(){

        return(

            <form onSubmit={this.handleSubmit}>
                <input
                    style={{width:"50%",height:"20%"}}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.email}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <input
                    style={{width:"50%",height:"20%"}}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.password}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <div  className="landing-button">
                    Sign In
                </div>
                <br/><br/>
                <div className="landing-button">
                    Sign Up
                </div>

            </form>



        );

    }





}

export default SignUp;