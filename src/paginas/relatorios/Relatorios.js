import { Grid, Paper } from "@mui/material";
import jsPDF from "jspdf";
import Controls from "../../components/controls/Controls";


const initialValues = [
    {id: 0, nome: 'João dos Testes'}
]

function Relatorios(props) {
   
    const classes = props.classes;

    const baixarRelatorio = () => {
        console.log('Clicado')
        var doc = new jsPDF()

        initialValues.forEach((item, i) =>{
            doc.text(20, 10 + (i * 10), 
                "Nome: " + item.nome )
        });
        doc.save('relatorio2.pdf')
        console.log('Finalizado')
    }

    return (
        <Paper className={classes.paper}>
            <Grid item xs={2}>
                <Controls.Button
                    text='Baixar Relatório'
                    type='submit'
                    onClick = {baixarRelatorio}
                />
            </Grid>
        </Paper>
    )
}


export default Relatorios;