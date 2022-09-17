import { Typography } from "@mui/material";
import CardFinanceiro from "./CardFinanceiro";
import CardNovoCard from "./CardNovoCard";
import { makeStyles } from '@material-ui/core'
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '250px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        color: Cores.azul5,
        '& .MuiTypography-root': {
            fontSize: '26px'
        }
    },
    linhaForm:{
        height: '1px',
        background: Cores.azul5,
        width: '98%',
        marginTop: '0.5%',
        marginBottom: '2%'
    },
    negativo: {
        color: Cores.vermelhoNegativo, 
    },
    positivo: {
        color: Cores.verdePositivo, 
    }
})

export default function CardConsultório(props) {

    const {total, consultorio} = props
    const classes = useStyles()

    return (
        <div>
            <div className={classes.header}>
                <Typography> {consultorio} </Typography>
                <Typography className={total < 0 ? classes.negativo : classes.positivo}> {Mascaras.dinheiro(total)} </Typography>
            </div>
            <div className={classes.linhaForm}></div>
            <div className={classes.root}>
                <CardFinanceiro
                    title='Materiais'
                    content='-100'
                    classes={props.classes}
                />
                <CardFinanceiro
                    title='Funcionários'
                    content='-300'
                    classes={props.classes}
                />
                <CardFinanceiro
                    title='Consultas'
                    content='600'
                    classes={props.classes}
                />
                 <CardNovoCard
                    title='Consultas'
                    content='600'
                    classes={props.classes}
                />
            </div>
        </div>
    )
}