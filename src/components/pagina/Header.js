import Box from '@mui/material/Box'
import Media from 'react-media'

function Header(props) {
    const classes = props.classes;
    return( 
        <div className = {classes.header}>
            <div className={classes.headerTitulo}>Cadastrar Cliente</div>
            <div className={classes.logOut}>
                <div className={classes.logOutText}>Log out</div>
            </div>
        </div>
    )
}

export default Header;