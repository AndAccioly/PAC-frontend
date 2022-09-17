import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import EnderecoForm from "../../components/EnderecoForm";
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";

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
}

const enderecoInicial = {
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

export default function PacienteCadastroForm(props) {
    const classes = props.classes

    const { addOrEdit, recordForEdit } = props
    
    const validate = (fieldValues = values) => {
        console.log('erros')
        console.log(erros)
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
            temp.planoSaude = fieldValues.planoSaude.length != 0 ? '' : CAMPO_OBRIGATORIO

        setErros({
            ...temp
        })
        console.log(fieldValues)
        console.log(values)
        if (fieldValues == values)
            console.log('aqui')
        console.log(temp)
        return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        handleInputChange,
        erros,
        resetForm,
        setErros
    } = useForm(initialValues, true, validate)

    const {
        enderecoValues,
        setEnderecoValues,
        handleEnderecoInputChange,
        enderecoErros,
        resetFormEndereco,
        setEnderecoErros
    } = useEnderecoForm(enderecoInicial, true, validate)

    function onClickLimpar() {
        resetForm()
        resetFormEndereco()
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
        if(recordForEdit != null)
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
                        onChange={handleInputChange}
                        error={erros.nome}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='cpf'
                        label='Cpf'
                        value={Mascaras.cpf(values.cpf)}
                        onChange={handleInputChange}
                        error={erros.cpf}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={erros.email}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='telefone'
                        label='Telefone'
                        value={values.telefone}
                        onChange={handleInputChange}
                        error={erros.telefone}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.DatePicker
                        name='dataNascimento'
                        label='Data de Nascimento'
                        value={values.dataNascimento}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={2} xs={6}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        onChange={handleInputChange}
                        options={planoSaudeService.getPlanosSaudeLista()}
                        error={erros.planoSaude}
                    />
                </Grid>

                <Grid item md={4} xs={6}>
                    <Controls.RadioGroup
                        value={values.sexo}
                        label='Sexo'
                        name='sexo'
                        onChange={handleInputChange}
                        items={sexoItems}
                        row={true}
                    />
                </Grid>
            </Grid>
            <div className={classes.paperSubtitulo}>Endereço</div>
            <div className={classes.linhaForm}></div>

            <EnderecoForm
                values={enderecoValues}
                handleInputChange={handleEnderecoInputChange}

            />

            <div className={classes.linhaForm}></div>
            <Grid item xs={2}>
                <Controls.Button
                    text='Enviar'
                    type='submit'
                />
                <Controls.Button
                    text='Limpar'
                    variant='outlined'
                    onClick={onClickLimpar}
                />
            </Grid>
        </Form>

    )
}