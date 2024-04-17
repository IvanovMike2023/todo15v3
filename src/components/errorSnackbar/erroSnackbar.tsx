import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setErrorusAC} from "../../app/app-reduce";
import {SnackbarOrigin} from "@mui/material/Snackbar/Snackbar";

export const CustomizedSnackbars = () => {
    //const [open, setOpen] = React.useState(false);
    const error = useAppSelector<null | string>(state => state.load.error)
    const dispatch = useAppDispatch()
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorusAC(null))

    };
    return (
        <div>
            <Snackbar  open={!!error} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top',horizontal: 'center'}} >
                <Alert

                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}