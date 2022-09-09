import useStyles from "../styles"
import React, { useEffect } from 'react';
import Wrapper from "./pagina/Wrapper"
import Header from "./pagina/Header"
import Footer from "./pagina/Footer"
import MenuLateral from "./menu/MenuLateral"

function Page(props) {
    const classes = useStyles();
    useEffect(() => {
        document.title = "PAC"
     }, []);
    return (
        <div className={classes.root}>
            <Header classes = {classes}/>
            <MenuLateral classes={classes}/>
            <Wrapper classes = {classes}/>
            <Footer classes = {classes}/>
        </div>
    )
}

export default Page;