import { Button as MuiButton, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        margin: '4px',
        marginTop: '20px'
    },
    label: {
        textTransform: 'none'
    },
    containedPrimary: {
        backgroundColor: '#1976d2',
        '&:hover': {
            background: '#125da6',
        }
    },
    outlinedPrimary: {
        color: '#1976d2',
        border: '1px solid rgba(25, 118, 210, 0.5)',
        '&:hover': {
            color: '#125da6',
            border: '1px solid rgba(18, 93, 166, 0.5)'
        }
        
    }

})

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || 'large'}
            onClick={onClick}
            color={color || 'primary'}
            {...other}
            classes={{ root: classes.root, label: classes.label, containedPrimary: classes.containedPrimary, outlinedPrimary: classes.outlinedPrimary }}
        >
            {text}
        </MuiButton>
    )
}