import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuLateralItem from './MenuLateralItem'

function LinkMenu(props) {
    const classes = props.classes;
    return( 
        <div className={classes.menuLateral}>
            <div className={classes.menuLateralTopo}></div>
            <div className={classes.menuLateralItens}>

                <MenuLateralItem 
                    titulo='Meu perfil'
                    classes={classes}
                    url='/perfil'
                />
                <MenuLateralItem 
                    titulo='Exames'
                    classes={classes}
                    url='/exame'
                />
                <MenuLateralItem 
                    titulo='Consultas'
                    classes={classes}
                    url='/consulta'
                />
                <MenuLateralItem 
                    titulo='Financeiro'
                    classes={classes}
                    url='/financeiro'
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem 
                    titulo='Cliente'
                    classes={classes}
                    url='/cliente'
                />
                <MenuLateralItem 
                    titulo='Consultório'
                    classes={classes}
                    url='/consultorio'
                />
                <MenuLateralItem 
                    titulo='Agenda'
                    classes={classes}
                    url='/agenda'
                />
                <MenuLateralItem 
                    titulo='Relatórios'
                    classes={classes}
                    url='/relatorios'
                />
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;