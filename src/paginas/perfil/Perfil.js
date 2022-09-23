import PerfilHeader from './PerfilHeader'
import { Paper } from '@mui/material';
import PerfilForm from './PerfilForm'
import { useState } from 'react';

const initialValues = {
    nome: 'João do teste',
    cargo: 'Cliente',
    perfil: {
        cpf: '',
        email: '',
        telefone: '',
        dataNascimento: new Date(),
        planoSaude: ''
    },
    enderecoInicial: {
        bairro: '',
        rua: '',
        cep: '',
        numero: '',
        estado: '',
        cidade: '',
        complemento: '',
    }
}

function Perfil(props) {

    const [values, setValues] = useState(initialValues)

    const classes = props.classes

    function handleEnderecoInputChange() {

    }

    return (
        <Paper className={classes.paper}>
            <Paper className={classes.subPaper}>
                <PerfilHeader
                    pessoa={initialValues}
                />
                <PerfilForm
                    perfil={values}
                    classes={classes}
                />
            </Paper>
            <Paper className={classes.subPaper}>
                Alterar senha
            </Paper>

        </Paper>
    )
}


export default Perfil;