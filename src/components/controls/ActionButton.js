import { Button as MuiButton, makeStyles } from '@material-ui/core'

const corAzul0 = '#ebf5fa'
const corAzul1 = '#cfedfc'
const corAzul2 = '#98d4f5'
const corAzul3 = '#4791ba'
const corAzul4 = '#205775'
const corAzul5 = '#1976d2'
const corAzul6 = '#125da6'

const useStyles = makeStyles({
    root: {
       marginRight: '6%',
        minWidth: 0,
    },
    secondary: {
        backgroundColor: '#f77e7e',
        '& .MuiButton-label':{
            color: 'white'
        }
    },
    primary: {
        marginRight: '6%',
        marginLeft: '-10%',
        backgroundColor: corAzul1,
        '& .MuiButton-label':{
            color: corAzul5
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