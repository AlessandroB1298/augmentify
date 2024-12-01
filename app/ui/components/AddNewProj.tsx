"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} sx={{
                backgroundColor: '#FB7185',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#fa4156',
                },
                borderRadius: '8px',
                padding: '10px 20px',
                marginRight : "10px"
            }} >Add New</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        // const formJson = Object.fromEntries((formData as any).entries());
                        // const email = formJson.email;
                        // console.log(email);
                        console.log(formData);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>New Project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Follow the prompts to create a new project.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Project Name"
                        type="text"
                        style={{width : "40%"}}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}