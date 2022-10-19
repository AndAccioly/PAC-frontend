import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import Cores from "../../../util/cores";

const useStyles = makeStyles({
    item: {
        textAlign: 'left',
        height: '100px',
        display: 'flex',
        width: '99%',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginTop: '1px',
        '&:hover': {
            backgroundColor: Cores.cinzaFundo,
            cursor: 'pointer'
        }
    },
    metades: {
        height: '100%',
        width: '100%',
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
    },
    texto: {
        marginTop: '40%',
    },
    teste: {
        width: '20%',
        backgroundColor: 'red',
        height: '150%',
        marginLeft: '10px',
        marginTop: '1px',
        borderRadius: '10px',
        position: 'relative',
        '&:hover': {
            backgroundColor: 'blue'
        }
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
                    {props.render ?
                        <div style={{ display: 'flex', height: 'inherit' }}>
                            <div className={classes.teste}>
                                Appointment
                            </div>
                            <div className={classes.teste}>
                                Appointment
                            </div>
                            <div className={classes.teste}>
                                Appointment
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
                <div className={classes.metadeBaixo}>
                  b
                </div>
            </div>


        </div>
    )
}