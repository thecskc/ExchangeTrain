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

                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.email}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <input

                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.password}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <div style={{display:"inline"}} className="landing-button">
                    Sign In
                </div>

                <div style={{display:"inline"}} className="landing-button">
                    Sign Up
                </div>

            </form>



        );

    }





}

export default SignUp;