import { Paper } from "@mui/material";
import PacienteCadastroForm from "./PacienteCadastroForm";




function Paciente(props) {
    const classes = props.classes
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <div className={classes.paperTitulo}>Cadastrar Paciente</div>
                <div className={classes.linhaForm}></div>
                <PacienteCadastroForm classes={classes}/>
            </Paper>
        </div>
    )
}


export default Paciente;