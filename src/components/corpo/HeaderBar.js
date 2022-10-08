import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles({
    logo: {
        width: '15%',
        height: 'auto',
        marginRight: '5%'
    },
    headerTitulo: {
        display: 'flex',
        transform: 'translateY(20%)',

    }
})

function defineCorpo(corpoId, classes) {
    switch (corpoId) {
        case 1:
            return 'Perfil'
        case 11:
            return 'Paciente'
        case 2:
            return 'Exame'
        case 3:
            return 'Consulta'
        case 4:
            return 'Financeiro'
        case 5:
            return 'Consultório'
        case 6:
            return 'Agenda'
        case 7:
            return 'Cirurgia'
        case 8:
            return 'Relatórios'
        case 9:
            return 'Funcionários'
        case 10:
            return 'Dashboard'
        default:
            return 'Início'
    }
}

function HeaderBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => props.abrirMenu()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {defineCorpo(props.corpo)}
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderBar;