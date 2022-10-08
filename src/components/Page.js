import useStyles from "../styles"
import React, { useEffect } from 'react';
import Wrapper from "./corpo/Wrapper"
import Header from "./corpo/Header"
import Media from 'react-media'
import HeaderBar from "./corpo/HeaderBar";
import MenuLateralNovo from "./menu/MenuLateralNovo";
import { makeStyles } from '@material-ui/core';
import { useState } from "react";

function Page(props) {
    const classes = useStyles();
    const [menuAberto, setMenuAberto] = useState(true)

    useEffect(() => {
        document.title = "PAC"
    }, []);

    const abrirMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <div className={classes.root}>
            <Media queries={{ small: { maxWidth: 699 } }}>
                {matches =>
                    matches.small ? (
                            <div>
                                <Header classes={classes} corpo={props.corpo} />
                                <Wrapper classes={classes} corpo={props.corpo} />
                            </div>
                    ) : (
                        <div>
                            <HeaderBar classes={classes} corpo={props.corpo} abrirMenu={abrirMenu}/>
                            <div className={classes.body}>
                                {menuAberto?
                                    <MenuLateralNovo classes={classes} />
                                    :
                                    <div></div>
                                }
                                <Wrapper classes={classes} corpo={props.corpo} menuAberto={menuAberto}/>
                            </div>
                        </div>
                    )
                }
            </Media>

        </div>

    )
}

export default Page;
