import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";
import { Troubleshoot } from "@mui/icons-material";

const initialValues = {
    id: 0,
    nome: '',
    numFuncionarios: '',
    renda: 0,
}

export default function ConsultorioVisualizarForm(props) {

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
            console.log('validou')
            //addOrEdit(values, resetForm)
        } else {
            console.log('errou')
        }
    }

    function onClickLimpar() {
        resetForm()
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>

                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        disabled={Troubleshoot}
                    />
                </Grid>

                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='numFuncionarios'
                        label='Número de Funcionários'
                        value={values.numFuncionarios}
                        disabled={true}
                    />
                </Grid>

                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='renda'
                        label='Renda último mês'
                        value={Mascaras.dinheiro(values.renda)}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>R$</InputAdornment>)
                        }}
                        disabled={true}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Button
                        text='Enviar'
                        type='submit'
                    />
                </Grid>
                <Grid item xs={2}>
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