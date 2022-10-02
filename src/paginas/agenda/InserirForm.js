import { Grid, InputAdornment } from "@mui/material";
import { makeStyles } from "@material-ui/core"
import Controls from "../../components/controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import { useEffect, useState } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";
import Cores from "../../util/cores";
import ItemMini from "../../components/ItemMini";
import Methods from "../../util/methods/Methods";
import { VolunteerActivismOutlined } from "@mui/icons-material";

const initialValues = {
    id: 0,
    paciente: '',
    funcionario: '',
    horaInicio: '',
    duracao: '',
    salario: 0,
    cargo: '',
    permissao: '',
    planoSaude: '',
    consultorio: '',
    dataNascimento: new Date(),
    matricula: ''
}

const useStyles = makeStyles({
    linha:{
        height: '1px',
        background: Cores.azul3,
        width: '99%',
        marginTop: '4%',
        marginBottom: '1%'
    }
})


export default function InserirForm() {

    const [listaConsultorios, setListaConsultorios] = useState([])
    const [listaPermissoes, setListaPermissoes] = useState([])
    const [matricula, setMatricula] = useState('')
    
    const classes = useStyles()
    //const { addOrEdit, recordForEdit } = props
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

    const handleInputCargo = e => {
        handleInputChange(e)
        gerarMatricula(e.target.value)
    }
    const gerarMatricula = (cargoId) => {
        const ultimaMatricula = Services.funcionarioService.getUltimaMatricula(cargoId)
        let novaMatricula = ultimaMatricula.substring(0, 1) + (Number(ultimaMatricula.substring(1)) + 1).toString()
        const tam = ultimaMatricula.length - novaMatricula.length
        for(let i = 0; i < tam; i++){
            novaMatricula = novaMatricula.substring(0, 1) + '0' + novaMatricula.substring(1)
        }
        setMatricula(novaMatricula)
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

    function onClickLimpar() {
        resetForm()
        setListaConsultorios([])
        setListaPermissoes([])
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
                    <Controls.Select
                        name='cargo'
                        label='Cargo'
                        value={values.cargo}
                        onChange={handleInputCargo}
                        options={Services.funcionarioService.getAllFuncoesAsList()}
                        error={erros.cargo}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='salario'
                        label='Salário'
                        value={Mascaras.dinheiro(values.salario)}
                        onChange={handleInputChange}
                        error={erros.salario}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>R$</InputAdornment>)
                        }}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.DatePicker
                        name='dataNascimento'
                        label='Data de Nascimento'
                        value={values.dataNascimento}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='matricula'
                        label='Nova matrícula'
                        value={matricula}
                        disabled={true}
                    />
                </Grid>

                <div className={classes.linha} />

                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='consultorio'
                        label='Consultório'
                        value={values.consultorio}
                        onChange={(e) => Methods.onChangeAddMiniItem(e, listaConsultorios, setListaConsultorios, handleInputChange)}
                        options={Services.consultorioService.getAllConsultoriosAsList()}
                        error={erros.consultorio}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <ItemMini 
                        items={listaConsultorios}
                        setItems={setListaConsultorios}
                        onClickRemove={Methods.onClickRemoveMiniItem}
                        nomes={Services.consultorioService.getAllConsultoriosAsList()}
                    />
                </Grid>

                <div className={classes.linha} />

                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='permissao'
                        label='Permissões'
                        value={values.permissao}
                        onChange={(e) => Methods.onChangeAddMiniItem(e, listaPermissoes, setListaPermissoes, handleInputChange)}
                        options={Services.funcionarioService.getAllPermissoesAsList()}
                        error={erros.permissao}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <ItemMini 
                        items={listaPermissoes}
                        setItems={setListaPermissoes}
                        onClickRemove={Methods.onClickRemoveMiniItem}
                        nomes={Services.funcionarioService.getAllPermissoesAsList()}
                    />
                </Grid>

                <div className={classes.linha} />
                
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