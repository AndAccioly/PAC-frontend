import { makeStyles } from "@material-ui/core";
import PanelDia from "./dia/PanelDia";
import PanelMes from "./mes/PanelMes";
import PanelAno from "./ano/PanelAno";

const useStyles = makeStyles({
    corpo: {
        backgroundColor: 'white',
        height: '90.3%',
        margin: 'auto',
        borderRadius: '10px',
        width: '99.5%',
        marginTop: '0.15%'
    },
})

function defineCorpo(corpoId) {
    switch (corpoId) {
        case '1':
            return <PanelDia />
        case '2':
            return <PanelMes />
        case '3':
            return <PanelAno />
        default:
            return <PanelDia />
    }
}

export default function AgendaCorpo(props) {
    const classes = useStyles();


    return (
        <div className={classes.corpo}>
            {defineCorpo(props.tipoVisualizacao)}
        </div>
    )

}