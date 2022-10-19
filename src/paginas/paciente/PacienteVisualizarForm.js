import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Icones from "../../util/icones";
import Services from "../../util/servicos";

const CAMPO_OBRIGATORIO = 'Campo obrigatório.'
const CAMPO_INVALIDO = 'Valor inválido.'
const initialValues = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    sexo: 'masculino',
    planoSaude: '',
    dataNascimento: new Date(),
    bairro: '',
    rua: '',
    cep: '',
    numero: '',
    estado: '',
    cidade: '',
    complemento: '',
}

const sexoItems = [
    { id: 'masculino', title: 'Masculino' },
    { id: 'feminino', title: 'Feminino' },
    { id: 'outro', title: 'Outro' }
]

export default function PacienteVisualizarForm(props) {
    const classes = props.classes

    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...erros }
        if ('nome' in fieldValues)
            temp.nome = fieldValues.nome ? '' : CAMPO_OBRIGATORIO
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? '' : CAMPO_INVALIDO
        if ('cpf' in fieldValues)
            temp.cpf = fieldValues.cpf.length >= 11 ? '' : CAMPO_OBRIGATORIO
        if ('telefone' in fieldValues)
            temp.telefone = fieldValues.telefone.length > 5 ? '' : CAMPO_OBRIGATORIO
        if ('planoSaude' in fieldValues)
            temp.planoSaude = fieldValues.planoSaude.length !== 0 ? '' : CAMPO_OBRIGATORIO

        setErros({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
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
            addOrEdit(values, resetForm)
        } else {
            console.log('errou')
        }
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
                <Grid item md={5} xs={6}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='cpf'
                        label='Cpf'
                        value={Mascaras.cpf(values.cpf)}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='email'
                        label='Email'
                        value={values.email}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='telefone'
                        label='Telefone'
                        value={values.telefone}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.DatePicker
                        name='dataNascimento'
                        label='Data de Nascimento'
                        value={values.dataNascimento}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={2} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        options={Services.pacienteService.getPlanosSaudeLista()}
                        disabled={true}
                    />
                </Grid>

                <Grid item md={4} xs={6}>
                    <Controls.RadioGroup
                        value={values.sexo}
                        label='Sexo'
                        name='sexo'
                        items={sexoItems}
                        row={true}
                        disabled={true}
                    />
                </Grid>
            </Grid>
        
            <div className={classes.linhaForm}></div>
            <Grid item xs={2}>
                <Controls.Button
                    text='Enviar'
                    type='submit'
                />
                <Controls.Button
                    text={Icones.printIcon}
                    variant='outlined'
                    onClick={onClickLimpar}
                />
            </Grid>
        </Form>

    )
}