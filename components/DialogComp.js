import React, {Component} from "react";
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import "../styling/style.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogComp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Dialog open={this.props.dialog} onClose={this.props.handleClose}>
                    <DialogTitle>{this.props.title} </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.content}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

export default DialogComp;