
import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";

export default function PerfilInfoBasicaForm(props) {

    return (
        <div>
            <Grid container>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='cpf'
                        label='CPF'
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='email'
                        label='Email'
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='telefone'
                        label='Telefone'
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='dataNascimento'
                        label='Data de Nascimento'
                    />
                </Grid>
            </Grid>
        </div>
    )
}