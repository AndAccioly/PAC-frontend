import { Paper } from "@mui/material";
import ClienteCadastroForm from "./ClienteCadastroForm";




function Cliente(props) {
    const classes = props.classes
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <div className={classes.paperTitulo}>Cadastrar Cliente</div>
                <div className={classes.linhaForm}></div>
                <ClienteCadastroForm classes={classes}/>
            </Paper>
        </div>
    )
}


export default Cliente;