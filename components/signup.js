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

            <form id="form" onSubmit={this.handleSubmit}>

                <h1>This is a form</h1>

            </form>



        );

    }





}

export default SignUp;