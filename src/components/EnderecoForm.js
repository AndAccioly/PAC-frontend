import Controls from "./controls/Controls";
import { Grid } from "@mui/material";

export default function EnderecoForm(props) {
    const {values, handleInputChange, recordForEdit } = props

    return (
        <div>
            <Grid container>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='cep'
                        label='CEP'
                        value={values.cep}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='estado'
                        label='Estado'
                        value={values.estado}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='cidade'
                        label='Cidade'
                        value={values.cidade}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='bairro'
                        label='Bairro'
                        value={values.bairro}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='rua'
                        label='Rua'
                        value={values.rua}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='numero'
                        label='Número'
                        value={values.numero}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='complemento'
                        label='Complemento'
                        value={values.complemento}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </div>
    )
}