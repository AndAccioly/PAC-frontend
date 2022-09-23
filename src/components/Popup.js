import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"
import { makeStyles } from '@material-ui/core'
import Controls from "./controls/Controls"
import CloseIcon from '@mui/icons-material/Close'
import Cores from "../util/cores"

const useStyles = makeStyles({
    dialogWrapper: {
        position: 'absolute',
    },
    dialogTitle: {
        paddingRight: '0px',
        backgroundColor: Cores.azul0,
        color: Cores.azul5
    }


})

export default function Popup(props) {

    const classes = useStyles()
    const { title, children, openPopup, setOpenPopup } = props

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: '1' }}> {title} </Typography>
                    <Controls.ActionButton 
                        color='secondary'
                        onClick={() => {setOpenPopup(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}