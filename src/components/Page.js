import useStyles from "../styles"
import React, { useEffect } from 'react';
import Wrapper from "./corpo/Wrapper"
import Header from "./corpo/Header"
import MenuLateral from "./menu/MenuLateral"
import Media from 'react-media'
import HeaderBar from "./corpo/HeaderBar";
import MenuLateralNovo from "./menu/MenuLateralNovo";
import { makeStyles } from '@material-ui/core';


function Page(props) {
    const classes = useStyles();

    useEffect(() => {
        document.title = "PAC"
    }, []);

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
                            <HeaderBar classes={classes} corpo={props.corpo} />
                            <div className={classes.body}>
                                <MenuLateralNovo classes={classes} />
                                <Wrapper classes={classes} corpo={props.corpo} />
                            </div>
                        </div>
                    )
                }
            </Media>

        </div>

    )
}

export default Page;
