import { Button as MuiButton, makeStyles } from '@material-ui/core'
import Cores from '../../util/cores'


const useStyles = makeStyles({
    root: {
        margin: '4px',
        marginTop: '20px'
    },
    label: {
        textTransform: 'none'
    },
    containedPrimary: {
        backgroundColor: Cores.azulBotao,
        '&:hover': {
            background: Cores.azul5,
        }
    },
    containedSecondary:{
        backgroundColor: Cores.verde1,
        '&:hover': {
            background: Cores.verde2,
        }
    },
    outlinedPrimary: {
        color: Cores.azulBotao,
        border: '1px solid rgba(25, 118, 210, 0.5)',
        '&:hover': {
            color: Cores.azul5,
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
            classes={{ root: classes.root, label: classes.label, containedPrimary: classes.containedPrimary, containedSecondary: classes.containedSecondary, outlinedPrimary: classes.outlinedPrimary }}
        >
            {text}
        </MuiButton>
    )
}