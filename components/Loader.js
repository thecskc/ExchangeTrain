import "../styling/loading.css"
import "../styling/style.css"
import React, {Component} from "react";


class Loader extends Component{
    render(){
        return(

            <div className="container" style={{"justifyContent":"center"}}>
            <div className="lds-spinner" style={{"alignSelf":"center"}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>


        )
    }
}

export default Loader;