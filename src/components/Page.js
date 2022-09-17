import useStyles from "../styles"
import React, { useEffect } from 'react';
import Wrapper from "./corpo/Wrapper"
import Header from "./corpo/Header"
import Footer from "./corpo/Footer"
import MenuLateral from "./menu/MenuLateral"

function Page(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = "PAC"
     }, []);
    return (
        <div className={classes.root}>
            <Header classes = {classes} corpo={props.corpo}/>
            <MenuLateral classes={classes} />
            <Wrapper classes = {classes} corpo={props.corpo}/>
            {/*<Footer classes = {classes}/>*/}
        </div>
    )
}

export default Page;