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
    const handleClick = (event) => {
        
    };

    return (
        <div className={classes.menuLateral}>

            <img src={logo} alt="Logo" className={classesLocal.logo}/>

            <div>

                <MenuLateralItem
                    titulo='Dashboard'
                    classes={classes}
                    url='/dashboard'
                    icon={Icones.dashboardIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Perfil'
                    classes={classes}
                    url='/perfil'
                    icon={Icones.perfilIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Exames'
                    classes={classes}
                    url='/exame'
                    icon={Icones.examesIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Consultas'
                    classes={classes}
                    url='/consulta'
                    icon={Icones.consultaIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Financeiro'
                    classes={classes}
                    url='/financeiro'
                    icon={Icones.financeiroIcon}
                    onClick={handleClick}
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem
                    titulo='Paciente'
                    classes={classes}
                    url='/paciente'
                    icon={Icones.pacienteIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Consultório'
                    classes={classes}
                    url='/consultorio'
                    icon={Icones.consultorioIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Funcionários'
                    classes={classes}
                    url='/funcionario'
                    icon={Icones.funcionariosIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Agenda'
                    classes={classes}
                    url='/agenda'
                    icon={Icones.calendarioIcon}
                    onClick={handleClick}
                />
                <MenuLateralItem
                    titulo='Relatórios'
                    classes={classes}
                    url='/relatorios'
                    icon={Icones.relatoriosIcon}
                    onClick={handleClick}
                />
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;