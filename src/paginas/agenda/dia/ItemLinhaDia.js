import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import Cores from "../../../util/cores";

const useStyles = makeStyles({
    item: {
        textAlign: 'left',
        height: '100px',
        display: 'flex',
        width: '100%',
        '&:hover': {
            backgroundColor: 'gray'
        }
    },
    metades: {
        height: '100%',
        width: '100%',
        borderBottom: '1px solid' + Cores.azul4
    },
    metadeCima: {
        height: '50%',
        borderBottom: '1px dashed' + Cores.cinzaContorno
    },
    metadeBaixo: {
        height: '50%',
    },
    horario: {
        textAlign: 'center',
        width: '7%',
        height: '100%',
        borderRight: '1px solid ' + Cores.azul4,
        borderBottom: '1px solid ' + Cores.azul4
    },
    texto: {
        marginTop: '40%',
    }

})




export default function ItemLinhaDia(props) {
    const classes = useStyles();
    const { item, index } = props

    return (
        <div key={index} className={classes.item}>
            <div className={classes.horario}>
                <div className={classes.texto}>
                    {item}
                </div>
            </div>
            <div className={classes.metades}>
                <div className={classes.metadeCima}>
                    a
                </div>
                <div className={classes.metadeBaixo}>
                    b
                </div>
            </div>


        </div>
    )
}