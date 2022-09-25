import { Paper } from "@mui/material";
import CardConsultorio from "./CardConsultorio";
import FinanceiroFiltro from "./FinanceiroFiltro";


function Financeiro(props) {

    const classes = props.classes;


    return (
            
        <Paper className={classes.paper} >
            <FinanceiroFiltro />
            <CardConsultorio
                consultorio='Consultório 1'
                total={200}
                classes={classes}
            />
            <CardConsultorio
                consultorio='Consultório 2'
                total={200}
                classes={classes}
            />
        </Paper>
           
    )
}


export default Financeiro;