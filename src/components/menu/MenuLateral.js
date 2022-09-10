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
                />
                <MenuLateralItem 
                    titulo='Exames e consultas'
                    classes={classes}
                />
                <MenuLateralItem 
                    titulo='Financeiro'
                    classes={classes}
                />

                <div className={classes.menuLinha}></div>

                <MenuLateralItem 
                    titulo='Cadastrar cliente'
                    classes={classes}
                />
                <MenuLateralItem 
                    titulo='Consultório'
                    classes={classes}
                />
                <MenuLateralItem 
                    titulo='Agenda'
                    classes={classes}
                />
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;