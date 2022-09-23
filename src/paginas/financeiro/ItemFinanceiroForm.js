import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";
import { Grid } from "@mui/material";

const tipoFinanceiro = [
    { id: 'lucro', title: 'Lucro' },
    { id: 'despesa', title: 'Despesa' },
]

const initialItems={
    tipoFinanceiro: 'lucro',
    tipo: '',
    nome: '',
}

const tipos = [
    { id: '1', value: 'Materiais' },
    { id: '2', value: 'Consultas' },
    { id: '3', value: 'Cirurgias' },
    { id: '4', value: 'Contas' },
    { id: '5', value: 'Funcionários' },
    { id: '6', value: 'Outro' },
]
export default function ItemFinanceiroForm(props) {

    const validate = (fieldValues = values) => {

    }
    
    const {
        values,
        setValues,
        handleInputChange,
        erros,
        resetForm,
        setErros
    } = useForm(initialItems, true, validate)

    const handleSubmit = e => {
        console.log('validou')

    }

    function onClickLimpar() {
        resetForm()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Controls.RadioGroup
                        value={values.tipoFinanceiro}
                        label='Tipo'
                        name='tipoFinanceiro'
                        onChange={handleInputChange}
                        items={tipoFinanceiro}
                        row={true}
                    />
                </Grid>
                <Grid item md={6} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo'
                        value={values.tipo}
                        onChange={handleInputChange}
                        options={tipos}
                        error={erros.tipo}
                    />
                </Grid>


                <Grid item md={6} xs={12}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        onChange={handleInputChange}
                        error={erros.nome}
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