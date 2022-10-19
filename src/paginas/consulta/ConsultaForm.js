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
    agendamento: new Date(),
    horaInicio: '',
    duracao: '',
    valor: 0, 
    planoSaude: '',
    consultorio: '',
    tipoConsulta: ''
}

 

export default function ConsultaForm(props) {

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
        e.stopPropagation()
        if (validate()) {
            addOrEdit(values, resetForm)
        } else {
        }
    }

    function onClickLimpar() {
        resetForm()
    }
    useEffect(() => {
        if (recordForEdit !== null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
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
                        name='funcionario'
                        label='Atendimento'
                        value={values.funcionario}
                        onChange={handleInputChange}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        error={erros.funcionario}
                    />
                </Grid>
                <Grid item  md={4} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        onChange={handleInputChange}
                        options={Services.pacienteService.getPlanosSaudeLista()}
                        error={erros.planoSaude}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='tipoConsulta'
                        label='Tipo de Consulta'
                        value={values.tipoConsulta}
                        onChange={handleInputChange}
                        options={Services.consultaService.getAllTipoConsulta()}
                        error={erros.tipoConsulta}
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