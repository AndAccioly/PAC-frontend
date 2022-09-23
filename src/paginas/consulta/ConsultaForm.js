import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";

const initialValues = {
    id: 0,
    paciente: '',
    funcionario: '',
    agendamento: new Date(),
    horaInicio: '',
    duracao: '',
    valor: 0,
    planoSaude: '',
    consultorio: ''
}

const pacientes = [
    { id: '1', value: 'João dos testes' },
    { id: '2', value: 'Maria das dores' },
    { id: '3', value: 'José Enfermo' },
    { id: '4', value: 'Joana Pé Quebrado' }
]

const funcionarios = [
    { id: '1', value: 'João dos testes' },
    { id: '2', value: 'Maria das dores' },
    { id: '3', value: 'José Enfermo' },
    { id: '4', value: 'Joana Pé Quebrado' }
]

const consultorios = [
    { id: '1', value: 'Consultório 1' },
    { id: '2', value: 'Consultório 2' },
    { id: '3', value: 'Consultório 3' }
]

export default function ConsultaForm(props) {

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
                    <Controls.Select
                        name='paciente'
                        label='Paciente'
                        value={values.paciente}
                        onChange={handleInputChange}
                        options={pacientes}
                        error={erros.paciente}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        onChange={handleInputChange}
                        options={consultorios}
                        error={erros.consultorio}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='funcionario'
                        label='Atendimento'
                        value={values.funcionario}
                        onChange={handleInputChange}
                        options={funcionarios}
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
                        options={planoSaudeService.getPlanosSaudeLista()}
                        error={erros.planoSaude}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.DatePicker
                        name='agendamento'
                        label='Agendamento'
                        value={values.agendamento}
                        onChange={handleInputChange}
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