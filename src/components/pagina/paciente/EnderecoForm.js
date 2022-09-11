import Controls from "../../controls/Controls";
import { Grid } from "@mui/material";

export default function EnderecoForm(props) {

    return (
        <div>
            <Grid container>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='cep'
                        label='CEP'
                        value={props.values.cep}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='estado'
                        label='Estado'
                        value={props.values.estado}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='cidade'
                        label='Cidade'
                        value={props.values.cidade}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='bairro'
                        label='Bairro'
                        value={props.values.bairro}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='rua'
                        label='Rua'
                        value={props.values.rua}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='numero'
                        label='Número'
                        value={props.values.numero}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='complemento'
                        label='Complemento'
                        value={props.values.complemento}
                        onChange={props.handleInputChange}
                    />
                </Grid>
            </Grid>
        </div>
    )
}