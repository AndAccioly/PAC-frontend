    import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function LinkMenu(props) {
    const classes = props.classes;
    return( 
        <div className={classes.menuLateral}>
            <div className={classes.menuLateralTopo}></div>
            <div className={classes.menuLateralItens}>

                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Meu perfil</div>
                </div>
                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Exames e consultas</div>
                </div>
                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Financeiro</div>
                </div>

                <div className={classes.menuLinha}></div>

                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Cadastrar cliente</div>
                </div>
                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Consultório</div>
                </div>
                <div className={classes.menuLateralItemArrow}>
                    <ArrowRightIcon className={classes.menuLateralIconArrow}/>
                    <div className={classes.menuLateralItem}>Agenda</div>
                </div>
                
            </div>
            <div className={classes.versao}>Version 0.0.0</div>
        </div>
    )
}

export default LinkMenu;