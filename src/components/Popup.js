import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"
import { makeStyles } from '@material-ui/core'
import Controls from "./controls/Controls"
import CloseIcon from '@mui/icons-material/Close'

const corAzul0 = '#ebf5fa'
const corAzul1 = '#cfedfc'
const corAzul2 = '#98d4f5'
const corAzul3 = '#4791ba'
const corAzul4 = '#205775'
const corAzul5 = '#1976d2'
const corAzul6 = '#125da6'

const useStyles = makeStyles({
    dialogWrapper: {
        position: 'absolute',
    },
    dialogTitle: {
        paddingRight: '0px',
        backgroundColor: corAzul0,
        color: corAzul5
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