import * as React from 'react';
import MenuItemIcon from './MenuItemIcon'
import logo from '../../img/logo.png'
import Icones from '../../util/icones';
import { makeStyles } from '@material-ui/core';
import Cores from '../../util/cores';

const useStyles = makeStyles({

    rootItem: {
        width: 'fit-content',
        position:'relative',
        display: 'flex',
        color: 'white',
        cursor: 'pointer',
        fontSize: '25px',
        textDecoration: 'none',
        backgroundColor: Cores.azul3,
        zIndex: '6',
        '&:hover .hidden-button': {
            minWidth: '150px',
            display: "flex",
        },
        '& .hidden-button': {
            marginRight: '5px',
            display: "none",
            transform: 'translateY(25%)',
        },
    },
})

function MenuLateralNovo(props) {
    const classes = props.classes
    const classesLocal = useStyles()
    const handleClick = (event) => {

    };

    return (
        <div>

            <MenuItemIcon
                titulo='Dashboard'
                url='/dashboard'
                icon={Icones.dashboardIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />

            <MenuItemIcon
                titulo='Perfil'
                url='/perfil'
                icon={Icones.perfilIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Exames'
                url='/exame'
                icon={Icones.examesIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Consultas'
                url='/consulta'
                icon={Icones.consultaIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Financeiro'
                url='/financeiro'
                icon={Icones.financeiroIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Paciente'
                url='/paciente'
                icon={Icones.pacienteIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Consultório'
                url='/consultorio'
                icon={Icones.consultorioIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Funcionários'
                url='/funcionario'
                icon={Icones.funcionariosIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Agenda'
                url='/agenda'
                icon={Icones.calendarioIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />
            <MenuItemIcon
                titulo='Relatórios'
                url='/relatorios'
                icon={Icones.relatoriosIcon}
                onClick={handleClick}
                root={classesLocal.rootItem}
                hiddenButton='hidden-button'
            />

        </div>
    )
}

export default MenuLateralNovo;