import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";
import * as planoSaudeService from '../../services/planoSaudeService'
import Services from '../../util/servicos'

const initialValues = {
    paciente: '',
    funcionario: '',
    cpf: '',
    tipo: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    planoSaude: '',
    consultorio: ''
}

const tiposConsulta = [
    { id: '1', value: 'Ortopedia' },
    { id: '2', value: 'Buco Maxilo' },
    { id: '3', value: 'Acompanhamento' },
    { id: '4', value: 'Limpeza Dental' }
]


export default function ConsultaFiltro(props) {

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

    function onClickLimpar() {
        resetForm()
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            console.log('validou')
            //addOrEdit(values, resetForm)
        } else {
            console.log('errou')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item md={3} xs={6}>
                    <Controls.DatePicker
                        name='dataInicio'
                        label='De'
                        value={values.dataInicio}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.DatePicker
                        name='dataFim'
                        label='Até'
                        value={values.dataFim}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo de Consulta'
                        value={values.tipo}
                        onChange={handleInputChange}
                        options={tiposConsulta}
                        error={erros.tipo}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        onChange={handleInputChange}
                        options={planoSaudeService.getPlanosSaudeLista()}
                        error={erros.planoSaude}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Select
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        onChange={handleInputChange}
                        options={Services.consultorioService.getAllConsultoriosAsList()}
                        error={erros.consultorio}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Select
                        name='funcionario'
                        label='Atendimento'
                        value={values.funcionario}
                        onChange={handleInputChange}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        error={erros.funcionario}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}