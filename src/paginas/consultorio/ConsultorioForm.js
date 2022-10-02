import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";

const initialValues = {
    id: 0,
    nome: '',
    responsavel: '',
    tipo: '',
}

const tipoConsultorio = [
    { id: '1', value: 'Cirurgia' },
    { id: '2', value: 'Atendimento Geral' },
    { id: '3', value: 'Consultas' }
]

export default function ConsultorioForm(props) {

    const { addOrEdit, recordForEdit } = props
    const validate = (fieldValues = values) => {
        return true
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
            addOrEdit(values, resetForm)
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

                <Grid item md={6} xs={6}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        onChange={handleInputChange}
                        error={erros.valor}
                    />
                </Grid>
                <Grid item md={6} xs={6}>
                    <Controls.Select
                        name='responsavel'
                        label='Responsável'
                        value={values.responsavel}
                        onChange={handleInputChange}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        error={erros.responsavel}
                    />
                </Grid>
                <Grid item md={12} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo'
                        value={values.tipo}
                        onChange={handleInputChange}
                        options={tipoConsultorio}
                        error={erros.tipo}
                    />
                </Grid>

                <Grid item md={6} xs={4}>
                    <Controls.Button
                        text='Enviar'
                        type='submit'
                    />
                </Grid>
                <Grid item md={6} xs={4}>
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