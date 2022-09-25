import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";

const initialValues = {
    id: 0,
    paciente: '',
    funcionario: '',
    horaInicio: '',
    duracao: '',
    valor: 0,
    funcao: '',
    planoSaude: '',
    consultorio: '',
    dataNascimento: new Date()
}


const funcoes = [
    { id: '1', value: 'Médico(a)' },
    { id: '2', value: 'Secretário(a)' },
    { id: '3', value: 'Auxiliar administrativo(a)' },
]

const consultorios = [
    { id: '1', value: 'Consultório 1' },
    { id: '2', value: 'Consultório 2' },
    { id: '3', value: 'Consultório 3' }
]

export default function FuncionarioForm(props) {

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
                        onChange={handleInputChange}
                        error={erros.nome}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        onChange={handleInputChange}
                        options={Services.consultorioService.getAllConsultoriosAsList()}
                        error={erros.consultorio}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='funcao'
                        label='Função'
                        value={values.funcao}
                        onChange={handleInputChange}
                        options={funcoes}
                        error={erros.funcao}
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
                    <Controls.DatePicker
                        name='dataNascimento'
                        label='Data de Nascimento'
                        value={values.dataNascimento}
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