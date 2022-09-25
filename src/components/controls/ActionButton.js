import { Button as MuiButton, makeStyles } from '@material-ui/core'
import Cores from '../../util/cores'

const useStyles = makeStyles({
    root: {
        marginRight: '6%',
        minWidth: 0,
        zIndex: 3
    },
    secondary: {
        backgroundColor: Cores.vermelhoClose,
        '& .MuiButton-label': {
            color: 'white'
        }
    },
    primary: {
        marginRight: '6%',
        backgroundColor: Cores.azul2,
        '& .MuiButton-label': {
            color: Cores.azul6
        }
    }

})

export default function ActionButton(props) {

    const { color, children, onClick } = props
    const classes = useStyles()

    return (
        <MuiButton
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
            color={color || 'primary'}
        >
            {children}
        </MuiButton>
    )
}