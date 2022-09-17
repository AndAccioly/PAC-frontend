import { Typography, makeStyles } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Controls from "./controls/Controls";
import NotListedLocation from "@mui/icons-material/NotListedLocation";

const azul0 = '#ebf5fa'
const azul1 = '#cfedfc'
const azul2 = '#98d4f5'
const azul3 = '#4791ba'
const azul4 = '#205775'
const azul5 = '#1976d2'
const azul6 = '#125da6'

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        top: '-25%',
        padding: '16px'
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {

        '&:hover': {
            color: azul6
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem'
        }
    },
    icon: {
        color: azul5,
        backgroundColor: azul0,
        borderRadius: '150px',
        '&:hover': {
            color: azul6,
        },
    }
})


export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props
    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableTipple className={classes.titleIcon}>
                    <NotListedLocation className={classes.icon} />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text='Não'
                    color='default'
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                />
                <Controls.Button
                    text='Sim'
                    color='secondary'
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}