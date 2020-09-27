import React, {Component} from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class NewPostDialog extends Component {
    state = {
        open: false;
    }
    handleOpen = () => {
        this.setState({
            open: true
        });
    };
    handleClose = () => {
        this.setState({
            open: false
        });
    };
    render() {
        return (
            <div>
                <Button variant="outlined" onClick={this.handleClickOpen}>Open form dialog</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    //aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <TextField fullWidth type="email"/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleClose}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default NewPostDialog;