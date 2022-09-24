import * as React from 'react';
import MenuLateralItem from './MenuLateralItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StoreIcon from '@mui/icons-material/Store';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SickIcon from '@mui/icons-material/Sick';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PeopleIcon from '@mui/icons-material/People';
import Icones from '../../util/icones';

function LinkMenu(props) {
    const classes = props.classes;
    return (
        <div className={classes.menuLateral}>
            <div className={classes.menuLateralTopo}></div>
            <div className={classes.menuLateralItens}>

                <MenuLateralItem
                    titulo='Dashboard'
                    classes={classes}
                    url='/dashboard'
                    icon={Icones.dashboardIcon}
                />
                <MenuLateralItem
                    titulo='Perfil'
                    classes={classes}
                    url='/perfil'
                    icon={Icones.perfilIcon}
                />
                <MenuLateralItem
                    titulo='Exames'
                    classes={classes}
                    url='/exame'
                    icon={Icones.examesIcon}
                />
                <MenuLateralItem
                    titulo='Consultas'
                    classes={classes}
                    url='/consulta'
                    icon={Icones.consultaIcon}
                />
                <MenuLateralItem
                    titulo='Financeiro'
                    classes={classes}
                    url='/financeiro'
                    icon={Icones.financeiroIcon}
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem
                    titulo='Paciente'
                    classes={classes}
                    url='/paciente'
                    icon={Icones.pacienteIcon}
                />
                <MenuLateralItem
                    titulo='Consultório'
                    classes={classes}
                    url='/consultorio'
                    icon={Icones.consultorioIcon}
                />
                <MenuLateralItem
                    titulo='Funcionários'
                    classes={classes}
                    url='/funcionario'
                    icon={Icones.funcionariosIcon}
                />
                <MenuLateralItem
                    titulo='Agenda'
                    classes={classes}
                    url='/agenda'
                    icon={Icones.calendarioIcon}
                />
                <MenuLateralItem
                    titulo='Relatórios'
                    classes={classes}
                    url='/relatorios'
                    icon={Icones.relatoriosIcon}
                />
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;