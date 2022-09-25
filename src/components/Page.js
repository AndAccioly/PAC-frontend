import useStyles from "../styles"
import React, { useEffect } from 'react';
import Wrapper from "./corpo/Wrapper"
import Header from "./corpo/Header"
import Footer from "./corpo/Footer"
import MenuLateral from "./menu/MenuLateral"
import Media from 'react-media'
import MenuRecolhido from "./menu/MenuRecolhido";

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
                        <MenuRecolhido classes={classes} />
                    ) : (
                        <MenuLateral classes={classes} />
                    )
                }
            </Media>
            <div>

                <Header classes={classes} corpo={props.corpo} />
                <Wrapper classes={classes} corpo={props.corpo} />
                {/*<Footer classes = {classes}/>*/}
            </div>
        </div>

    )
}

export default Page;
