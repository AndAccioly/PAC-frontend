import { Grid, InputAdornment, makeStyles } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";
import { Troubleshoot } from "@mui/icons-material";

const initialValues = {
    id: 0,
    nome: '',
    tipo: '',
    numFuncionarios: 7,
    responsavel: '',
    renda: '',
}

export default function ConsultorioVisualizarForm(props) {

    const { addOrEdit, recordForEdit } = props

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
                ...recordForEdit,
                renda: '1000.00',
                numFuncionarios: 7
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container >

                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={6} xs={6}>
                    <Controls.Select
                        name='responsavel'
                        label='Responsável'
                        value={values.responsavel}
                        options={Services.funcionarioService.getAllFuncionariosAsList()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={12} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo'
                        value={values.tipo}
                        options={Services.consultorioService.getAllTipoConsultorio()}
                        disabled={true}
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