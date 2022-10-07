import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Cores from '../../util/cores';
import Media from 'react-media'

const useStyles = makeStyles({
 
    menuIconWeb: {
        margin: '10px',
        '& .MuiSvgIcon-root': {
            fontSize: '3.6rem'
        },
    },
    menuIconMobile: {
        transform: 'translateY(30%)',
        marginLeft: '10px'
    },
})

function MenuItemIcon(props) {

    const { icon, url, titulo, onClick } = props
    const classes = useStyles()
    return (
        <Link to={url} className={props.root} onClick={() => { onClick() }}>
            
                <div className={classes.menuIconWeb}>
                    {icon}
                </div>

                <div className={props.hiddenButton}>{titulo}</div>
            
        </Link>
    )
}

export default MenuItemIcon;