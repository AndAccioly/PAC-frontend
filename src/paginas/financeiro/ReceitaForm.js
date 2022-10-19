import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";
import { Grid } from "@mui/material";
import Mascaras from "../../util/mascaras";


const initialValues = {
    id: 0,
    nome: '',
    quantidade: 0,
    valor: ''
}

export default function ReceitaForm(props) {

    const { addOrEdit } = props
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
                    <Controls.Input
                        name='quantidade'
                        label='Quantidade'
                        value={Mascaras.numeroInteiro(values.quantidade)}
                        onChange={handleInputChange}
                        error={erros.quantidade}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='valor'
                        label='Valor'
                        value={Mascaras.dinheiroCifrao(values.valor)}
                        onChange={handleInputChange}
                        error={erros.valor}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Button
                        text='Adicionar'
                        type='submit'
                    />
                </Grid>
            </Grid>
        </Form>
    )
}