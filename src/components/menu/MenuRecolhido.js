import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuLateralItem from './MenuLateralItem';
import { makeStyles } from '@material-ui/core';
import Icones from '../../util/icones';


const useStyles = makeStyles({
    rootMenu: {
        '& .MuiList-root': {
            width: '200px',
            fontSize: '20px'

        }
    }
})

export default function MenuRecolhido(props) {
    const classes = props.classes
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classesLocal = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.menuRecolhido}>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >

                <div>
                    {Icones.menuIcon}
                </div>

            </Button>
            <Menu className={classesLocal.rootMenu}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                 <MenuLateralItem
                    titulo='Dashboard'
                    classes={classes}
                    url='/dashboard'
                    onClick={handleClose}
                    icon={Icones.dashboardIcon}
                />
                <MenuLateralItem
                    titulo='Perfil'
                    classes={classes}
                    url='/perfil'
                    onClick={handleClose}
                    icon={Icones.perfilIcon}
                  
                />
                <MenuLateralItem
                    titulo='Exames'
                    classes={classes}
                    url='/exame'
                    onClick={handleClose}
                    icon={Icones.examesIcon}
                />
                <MenuLateralItem
                    titulo='Consultas'
                    classes={classes}
                    url='/consulta'
                    onClick={handleClose}
                    icon={Icones.consultaIcon}
                />
                <MenuLateralItem
                    titulo='Financeiro'
                    classes={classes}
                    url='/financeiro'
                    onClick={handleClose}
                    icon={Icones.financeiroIcon}
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem
                    titulo='Paciente'
                    classes={classes}
                    url='/paciente'
                    onClick={handleClose}
                    icon={Icones.pacienteIcon}
                />
                <MenuLateralItem
                    titulo='Consultório'
                    classes={classes}
                    url='/consultorio'
                    onClick={handleClose}
                    icon={Icones.consultorioIcon}
                />
                <MenuLateralItem
                    titulo='Funcionários'
                    classes={classes}
                    url='/funcionario'
                    onClick={handleClose}
                    icon={Icones.funcionariosIcon}
                />
                <MenuLateralItem
                    titulo='Agenda'
                    classes={classes}
                    url='/agenda'
                    onClick={handleClose}
                    icon={Icones.calendarioIcon}
                />
                <MenuLateralItem
                    titulo='Relatórios'
                    classes={classes}
                    url='/relatorios'
                    onClick={handleClose}
                    icon={Icones.relatoriosIcon}
                />
            </Menu>
        </div>
    );
}