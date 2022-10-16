import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";
import Services from "../../util/servicos";
import { useEffect, useState } from "react";

const initialValues = {
    paciente: '',
    funcionario: '',
    cpf: '',
    tipo: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    planoSaude: '',
    consultorio: '',
    ordenarPor: ''
}

const ordenarPor = [
    { id: '1', value: 'Nome' },
    { id: '2', value: 'Tamanho' },
    { id: '3', value: 'Renda Maior' },
    { id: '4', value: 'Renda Menos' },
    { id: '5', value: 'Mais Antigo' },
    { id: '6', value: 'Mais Novo' }
]

export default function FinanceiroFiltro(props) {

    const {consultorios} = props
    const [listaConsultorios, setListaConsultorios] = useState(Services.consultorioService.getAllConsultoriosAsList)
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
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        onChange={handleInputChange}
                        options={listaConsultorios}
                        error={erros.consultorio}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Select
                        name='ordenarPor'
                        label='Ordenar Por'
                        value={values.ordenarPor}
                        onChange={handleInputChange}
                        options={ordenarPor}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}