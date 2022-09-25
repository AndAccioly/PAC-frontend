import * as React from 'react';
import MenuLateralItem from './MenuLateralItem'
import logo from '../../img/logo.png'
import Icones from '../../util/icones';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        width: '75%',
        height: 'auto'
    }
})

function LinkMenu(props) {
    const classes = props.classes
    const classesLocal = useStyles()
    return (
        <div className={classes.menuLateral}>

            <img src={logo} alt="Logo" className={classesLocal.logo}/>

            <div className={classes.menuLateralItens}>

                <MenuLateralItem
                    titulo='Dashboard'
                    classes={classes}
                    url='/dashboard'
                    icon={Icones.dashboardIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Perfil'
                    classes={classes}
                    url='/perfil'
                    icon={Icones.perfilIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Exames'
                    classes={classes}
                    url='/exame'
                    icon={Icones.examesIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Consultas'
                    classes={classes}
                    url='/consulta'
                    icon={Icones.consultaIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Financeiro'
                    classes={classes}
                    url='/financeiro'
                    icon={Icones.financeiroIcon}
                    onClick={null}
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem
                    titulo='Paciente'
                    classes={classes}
                    url='/paciente'
                    icon={Icones.pacienteIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Consultório'
                    classes={classes}
                    url='/consultorio'
                    icon={Icones.consultorioIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Funcionários'
                    classes={classes}
                    url='/funcionario'
                    icon={Icones.funcionariosIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Agenda'
                    classes={classes}
                    url='/agenda'
                    icon={Icones.calendarioIcon}
                    onClick={null}
                />
                <MenuLateralItem
                    titulo='Relatórios'
                    classes={classes}
                    url='/relatorios'
                    icon={Icones.relatoriosIcon}
                    onClick={null}
                />
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;