import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/UseForm';
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
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
    complemento: ''
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
            addOrEdit(values, resetForm)
        } else {
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
                        options={Services.pacienteService.getPlanosSaudeLista()}
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
            <Grid container>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='cep'
                        label='CEP'
                        value={values.cep}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='estado'
                        label='Estado'
                        value={values.estado}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='cidade'
                        label='Cidade'
                        value={values.cidade}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='bairro'
                        label='Bairro'
                        value={values.bairro}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='rua'
                        label='Rua'
                        value={values.rua}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='numero'
                        label='Número'
                        value={values.numero}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='complemento'
                        label='Complemento'
                        value={values.complemento}
                        onChange={handleInputChange}
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
                    text='Limpar'
                    variant='outlined'
                    onClick={onClickLimpar}
                />
            </Grid>
        </Form>

    )
}