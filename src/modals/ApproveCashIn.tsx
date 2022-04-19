import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, styled } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),

    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogTitle-root': {
        padding: theme.spacing(2),
    },
    '& .MuiPaper-root': {
        width: theme.spacing(50),
        padding: theme.spacing(2),
    },

}));


export default function ApproveCashIn() {
    const [open, setOpen] = React.useState(false);
    
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Approve Modal
            </Button> 

            <BootstrapDialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { borderRadius: 10 }
                }}
            >
                <DialogTitle id="modal-title">
                    Approve Cash In Request
                </DialogTitle>
                <Divider variant="middle" />
                <DialogContent>
                    <DialogContentText id="modal-description" >
                        Do you wish to approve this request?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container spacing={1}>
                        {/* Action Buttons */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='success'
                                onClick={handleClose}
                                sx={{ borderRadius: 20 }}
                            >
                                Approve
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="text"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}