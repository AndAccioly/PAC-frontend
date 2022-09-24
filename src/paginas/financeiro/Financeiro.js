import { Paper } from "@mui/material";
import CardConsultorio from "./CardConsultorio";

function Financeiro(props) {

    const classes = props.classes;


    return (
            
        <Paper className={classes.paper}>
            <CardConsultorio
                consultorio='Consultório 1'
                total={200}
                classes={classes}
            />
        </Paper>
           
    )
}


export default Financeiro;