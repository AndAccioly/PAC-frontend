import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";
import Cores from "../../util/cores";

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



export default function ConsultaVisualizarForm(props) {

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
                        options={Services.pacienteService.getPacientesAsList()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        options={Services.consultorioService.getAllConsultoriosAsList()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='funcionario'
                        label='Atendimento'
                        value={values.funcionario}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        options={planoSaudeService.getPlanosSaudeLista()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.DatePicker
                        name='agendamento'
                        label='Agendamento'
                        value={values.agendamento}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='valor'
                        label='Valor'
                        value={Mascaras.dinheiro(values.valor)}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>R$</InputAdornment>)
                        }}
                        disabled={true}
                    />
                </Grid>

                <Grid item xs={2} style={{width: '250px'}}>
                    <Controls.Button
                        text='Iniciar Consulta'
                        type='submit'
                        color='secondary'
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controls.Button
                        text='Fechar'
                        variant='outlined'
                    />
                </Grid>
            </Grid>
        </Form>
    )
}