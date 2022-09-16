import Box from '@mui/material/Box'
import Media from 'react-media'


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
        default:
            return 'Início'
    }
}

function Header(props) {
    const classes = props.classes;
    return (
        <div className={classes.headerTodo}>
            <div className={classes.header}>
                <div className={classes.headerTitulo}>{defineCorpo(props.corpo)}</div>
                <div className={classes.logOut}>
                    <div className={classes.logOutText}>Log out</div>
                </div>

            </div>
            <div className={classes.headerLinha}></div>
        </div>
    )
}

export default Header;