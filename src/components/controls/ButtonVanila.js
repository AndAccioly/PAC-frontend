import { Button as MuiButton, makeStyles } from '@material-ui/core'
import Cores from '../../util/cores'


const useStyles = makeStyles({
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

export default function ButtonVanila(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || 'large'}
            onClick={onClick}
            color={color || 'primary'}
            {...other}
            classes={{ label: classes.label, containedPrimary: classes.containedPrimary, containedSecondary: classes.containedSecondary, outlinedPrimary: classes.outlinedPrimary }}
        >
            {text}
        </MuiButton>
    )
}