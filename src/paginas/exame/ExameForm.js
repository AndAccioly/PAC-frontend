import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";

const initialValues = {
    id: 0,
    paciente: '',
    funcionario: '',
    data: new Date(),
    horaInicio: '',
    duracao: '',
    valor: 0,
    planoSaude: '',
}

export default function ExameForm(props) {

    //const { addOrEdit, recordForEdit } = props
    const validate = (fieldValues = values) => {

    }
    const {
        values,
        setValues,
        handleInputChange,
        erros,
        resetForm,
        setErros
    } = useForm(initialValues, true, validate)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            //addOrEdit(values, resetForm)
        } else {
        }
    }

    function onClickLimpar() {
        resetForm()
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>

                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='paciente'
                        label='Paciente'
                        value={values.paciente}
                        onChange={handleInputChange}
                        options={Services.pacienteService.getPacientesAsList()}
                        error={erros.paciente}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='funcionario'
                        label='Atendimento'
                        value={values.funcionario}
                        onChange={handleInputChange}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        error={erros.funcionario}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='valor'
                        label='Valor'
                        value={Mascaras.dinheiro(values.valor)}
                        onChange={handleInputChange}
                        error={erros.valor}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>R$</InputAdornment>)
                        }}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        onChange={handleInputChange}
                        options={Services.pacienteService.getPlanosSaudeLista()}
                        error={erros.planoSaude}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Button
                        text='Enviar'
                        type='submit'
                    />
                    <Controls.Button
                        text='Limpar'
                        variant='outlined'
                        onClick={onClickLimpar}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}