import { Typography } from "@mui/material";
import CardFinanceiro from "./CardFinanceiro";
import CardNovoCard from "./CardNovoCard";
import { makeStyles } from '@material-ui/core'
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";
import { useEffect, useState } from "react";
import Services from "../../util/servicos";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginBottom: '2%',
    },
    header: {
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        color: Cores.azul5,
        '& .MuiTypography-root': {
            fontSize: '30px'
        }
    },
    linhaForm: {
        height: '2px',
        background: Cores.azul5,
        marginTop: '0.5%',
        marginBottom: '2.5%'
    },
    negativo: {
        color: Cores.vermelhoNegativo,
    },
    positivo: {
        color: Cores.verdePositivo,
    }
})

export default function CardConsultório(props) {

    const { consultorio, updateConsultorios } = props
    const [total, setTotal] = useState('0')
    const classes = useStyles()

    const [records, setRecords] = useState(consultorio.cardsFinanceiros)

    const updateTotal = () =>{
        let novoTotal = 0
        records.map(item => {
            if (item.categoria === 'lucro') {
                novoTotal += Number(Mascaras.numeroInteiro(item.valor))
            } else {
                novoTotal -= Number(Mascaras.numeroInteiro(item.valor))
            }
        })
        setTotal(novoTotal.toString())
    }

    const setRecordsAndUpdate = () => {
        let novosRecords = Services.financeiroService.getAllCardsFinanceirosConsultorio(consultorio.id)
        setRecords(novosRecords)
        updateConsultorios()
        updateTotal()
    }


    useEffect(() => {
        setRecords(consultorio.cardsFinanceiros)
        updateTotal()
    }, [consultorio.cardsFinanceiros, updateTotal])

    return (
        <div>
            <div className={classes.header}>
                <Typography> {consultorio.nome} </Typography>
                <Typography className={total < 0 ? classes.negativo : classes.positivo}> {Mascaras.dinheiroCifrao(total)} </Typography>
            </div>
            <div className={classes.linhaForm}></div>

            <div className={classes.root} style={{ overflow: 'auto' }}>
                {records.map((cardFinanceiro, index) => (
                    <div key={index}>
                        <CardFinanceiro
                            cardFinanceiro={cardFinanceiro}
                            classes={props.classes}
                            setRecords={setRecordsAndUpdate}
                        />
                    </div>


                ))}

                <CardNovoCard
                    classes={props.classes}
                    setRecords={setRecordsAndUpdate}
                    consultorio={consultorio}
                />
            </div>






        </div>
    )
}