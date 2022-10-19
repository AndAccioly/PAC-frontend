import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";

const initialValues = {
    id: 0,
    consultaId: '',
    descricao: '',
    pacienteNome: ''
}



export default function RegistrarConsultaForm(props) {

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
        console.log('RegistrarConsultaForm useEffect')
        console.log(recordForEdit)
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
                        name='paciente'
                        label='Paciente'
                        value={values.paciente}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='paciente'
                        label='Paciente'
                        value={values.paciente}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='paciente'
                        label='Paciente'
                        value={values.paciente}
                        disabled={true}
                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    <Controls.Input
                        name='paciente'
                        label=''
                        multiline
                        rows={15}
                        maxRows={20}
                        value={values.descricao}
                        onChange={handleInputChange}
                        error={erros.paciente}
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