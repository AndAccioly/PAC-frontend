import { Paper } from "@mui/material";
import CardConsultorio from "./CardConsultorio";
import FinanceiroFiltro from "./FinanceiroFiltro";
import { useEffect, useState } from "react";
import Services from "../../util/servicos";

function Financeiro(props) {

    const classes = props.classes;
    const [consultorios, setConsultorios] = useState(Services.consultorioService.getAllConsultorios())

    const updateConsultorios = () => {
        setConsultorios(Services.consultorioService.getAllConsultorios())
    }
    return (

        <Paper className={classes.paper} >
           
            <FinanceiroFiltro />
            
            {consultorios.map(consultorio => (
                <div style={{ maxHeight: 725, overflow: 'auto' }} key={consultorio.id}>
                    <CardConsultorio
                        consultorio={consultorio}
                        classes={classes}
                        updateConsultorios={updateConsultorios}
                    />
                </div>
            ))}

        </Paper>

    )
}


export default Financeiro;