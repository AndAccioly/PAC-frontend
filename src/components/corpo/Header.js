import Box from '@mui/material/Box'
import Media from 'react-media'
import logo from '../../img/logo.png'
import { makeStyles } from '@material-ui/core';
import MenuRecolhido from '../menu/MenuRecolhido';

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

function Header(props) {
    const classes = props.classes;
    const classesLocal = useStyles()

    return (
        <div className={classes.headerTodo}>
            <div className={classes.header}>
                <Media queries={{ small: { maxWidth: 699 } }}>
                    {matches =>
                        matches.small ? (
                            <div className={classes.headerFaixaMobile}>
                                <div className={classesLocal.headerTitulo}>
                                    <MenuRecolhido classes={classes} />
                                    {defineCorpo(props.corpo)}
                                </div>
                                <img src={logo} alt="Logo" className={classesLocal.logo} />
                            </div>
                        ) : (
                            <div className={classes.headerFaixa}>
                                <div className={classesLocal.headerTitulo}>
                                    {defineCorpo(props.corpo)}
                                </div>
                            </div>
                        )
                    }
                </Media>



            </div>
        </div>
    )
}

export default Header;