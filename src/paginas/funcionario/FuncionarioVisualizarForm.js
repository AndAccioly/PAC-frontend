import { Grid, InputAdornment } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/UseForm';
import { makeStyles } from "@material-ui/core"
import { useEffect } from "react";
import Mascaras from "../../util/mascaras";
import Services from "../../util/servicos";
import Cores from "../../util/cores";
import ItemMini from "../../components/ItemMini";
import Methods from "../../util/methods/Methods";

const initialValues = {
    id: 0,
    nome: '',
    valor: 0,
    salario: '',
    cargo: '',
    dataNascimento: new Date(),
    listaConsultorios: [],
    listaPermissoes: [],
    consultoriosTexto: [],
    permissoesTexto: []
}


const useStyles = makeStyles({
    linha: {
        height: '1px',
        background: Cores.azul3,
        width: '100%',
        marginTop: '4%',
        marginBottom: '1%'
    }
})

export default function FuncionarioVisualizarForm(props) {

    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        return true;
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
            addOrEdit(values, resetForm)
        } else {
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
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Select
                        name='cargo'
                        label='Cargo'
                        value={values.cargo}
                        options={Services.funcionarioService.getAllFuncoesAsList()}
                        disabled={true}
                    />
                </Grid>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='salario'
                        label='Salário'
                        value={Mascaras.dinheiro(values.salario)}
                        disabled={true}
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
                        disabled={true}
                    />
                </Grid>
                <div className={classes.linha} />
                Consultórios
                <ItemMini
                    items={values.consultoriosTexto}
                    onClickRemove={Methods.onClickRemoveMiniItem}
                    nomes={Services.consultorioService.getAllConsultoriosAsList()}
                    isVisualizar={true}
                />
                <div className={classes.linha} />
                Permissões
                <ItemMini
                    items={values.listaPermissoes}
                    onClickRemove={Methods.onClickRemoveMiniItem}
                    nomes={Services.funcionarioService.getAllPermissoesAsList()}
                    isVisualizar={true}
                />
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