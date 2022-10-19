import { makeStyles } from "@material-ui/core";
import PanelDia from "./dia/PanelDia";
import PanelMes from "./mes/PanelMes";
import PanelAno from "./ano/PanelAno";
import Cores from "../../util/cores";
import { useState } from "react";

const useStyles = makeStyles({
    corpo: {
        backgroundColor: Cores.azul0,
        height: '90.3%',
        margin: 'auto',
        borderRadius: '10px',
        width: '99.5%',
        marginTop: '0.15%'
    },
})



function defineCorpo(corpoId, appointments) {
    switch (corpoId) {
        case '1':
            return <PanelDia appointments={appointments}/>
        case '2':
            return <PanelMes appointments={appointments}/>
        case '3':
            return <PanelAno appointments={appointments}/>
        default:
            return <PanelDia appointments={appointments}/>
    }
}

export default function AgendaCorpo(props) {
    const classes = useStyles();
    const {appointments} = props

    return (
        <div className={classes.corpo}>
            {defineCorpo(props.tipoVisualizacao, appointments)}
        </div>
    )

}