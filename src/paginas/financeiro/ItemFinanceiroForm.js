import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";
import { Grid } from "@mui/material";
import Services from "../../util/servicos";
import { useEffect, useState } from "react";

const categorias = [
    { id: 'lucro', title: 'Lucro' },
    { id: 'despesa', title: 'Despesa' },
]

const initialItems = {
    id: 0,
    consultorioId: 0,
    categoria: 'lucro',
    tipo: '',
    nome: '',
    itensFinanceiros: [],
    valor: '0'
}


export default function ItemFinanceiroForm(props) {

    const { addOrEdit, recordForEdit } = props
    const [isAlterar, setIsAlterar] = useState(false)
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
    } = useForm(initialItems, true, validate)

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
        if (recordForEdit !== null){
            setIsAlterar(true)
            setValues({
                ...recordForEdit
            })
        }
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Controls.RadioGroup
                        value={values.categoria}
                        label='Tipo'
                        name='categoria'
                        onChange={handleInputChange}
                        items={categorias}
                        row={true}
                    />
                </Grid>
                <Grid item md={6} xs={6}>
                    <Controls.Select
                        name='tipo'
                        label='Tipo'
                        value={values.tipo}
                        onChange={handleInputChange}
                        options={Services.financeiroService.getAllTipoFinanceiro()}
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

                {isAlterar ?
                    <Grid item xs={2} >
                        <Controls.Button
                            text='Alterar'
                            type='submit'
                        />
                    </Grid>

                    :
                    <Grid item xs={4} >
                        <Controls.Button
                            text='Adicionar'
                            type='submit'
                        />
                        <Controls.Button
                            text='Limpar'
                            variant='outlined'
                            onClick={onClickLimpar}
                        />
                    </Grid>

                }
            </Grid>
        </Form>
    )
}