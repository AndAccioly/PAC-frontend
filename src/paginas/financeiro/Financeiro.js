import { Paper } from "@mui/material";
import CardConsultorio from "./CardConsultorio";
import FinanceiroFiltro from "./FinanceiroFiltro";


function Financeiro(props) {

    const classes = props.classes;


    return (

        <Paper className={classes.paper} >
            <FinanceiroFiltro />
            <div style={{ maxHeight: 725, overflow: 'auto' }}>
                <CardConsultorio
                    consultorio='Consultório 1'
                    total={200000}
                    classes={classes}
                />
                <CardConsultorio
                    consultorio='Consultório 2'
                    total={200000}
                    classes={classes}
                />
            </div>
        </Paper>

    )
}


export default Financeiro;