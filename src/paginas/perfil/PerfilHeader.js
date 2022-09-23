import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import Cores from '../../util/cores';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        '& .MuiSvgIcon-root': {
            color: Cores.azul5,
            fontSize: '7rem',
        },
        
    },
    texto: {
        color: Cores.azul5,
        textAlign: 'left',
        marginTop: '1%'
    },
})

export default function PerfilHeader(props) {

    const { pessoa } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AccountBoxIcon className={classes.icon} />
            <div className={classes.texto}>
                <Typography variant="h4">{pessoa.nome}</Typography>
                <Typography variant="h5">{pessoa.cargo}</Typography>
            </div>
        </div>
    )
}


