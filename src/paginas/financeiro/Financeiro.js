import { Paper } from "@mui/material";
import { useState } from "react";
import CardConsultorio from "./CardConsultorio";

const initialValues = {

}
function Financeiro(props) {

    const [records, setRecords] = useState()
    const [consultorios, setConsultorios] = useState(initialValues)

    const classes = props.classes;
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <CardConsultorio 
                    consultorio='Consultório 1'
                    total={200}
                    classes={classes}
                />
            </Paper>
        </div>
    )
}


export default Financeiro;