import { Alert, Snackbar } from "@mui/material"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {

    }
})


export default function Notificacao(props) {

    const { notify, setNotify } = props
    const classes = useStyles()


    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                saverity={notify.type || 'success'}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}