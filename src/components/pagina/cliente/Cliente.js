import { Paper } from "@mui/material";
import ClienteCadastroForm from "./ClienteCadastroForm";




function Cliente(props) {
    const classes = props.classes
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paperForm}>
                <ClienteCadastroForm classes={classes}/>
            </Paper>
        </div>
    )
}


export default Cliente;