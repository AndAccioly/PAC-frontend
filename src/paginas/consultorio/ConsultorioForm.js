import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";

const initialValues = {
    id: 0,
    nome: '',
    responsavel: '',
    tipo: '',
    cardsFinanceiros: []
}

export default function ConsultorioForm(props) {
    const classes = props.classes
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
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        onChange={handleInputChange}
                        error={erros.valor}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='responsavel'
                        label='Responsável'
                        value={values.responsavel}
                        onChange={handleInputChange}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        error={erros.responsavel}
                    /> 
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo'
                        value={values.tipo}
                        onChange={handleInputChange}
                        options={Services.consultorioService.getAllTipoConsultorio()}
                        error={erros.tipo}
                    />
                </Grid>

                <Grid item md={2}>
                    <Controls.Button
                        text='Enviar'
                        type='submit'
                    />
                </Grid>
                <Grid item md={2}>
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