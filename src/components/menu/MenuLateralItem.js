import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Cores from '../../util/cores';

const useStyles = makeStyles({
    menuLateralItemArrow: {
        display: 'flex',
        paddingLeft: '10%',
        color: Cores.azul4,
        "&:hover": {
            background: Cores.azul0,
            cursor: 'pointer',
            color: Cores.azul4
        }
    },
    menuLink: {
        textDecoration: 'none',
        display: 'flex',
        color: Cores.azul4,
        "&:hover": {
            background: Cores.azul0,
            cursor: 'pointer',
        }
    },
    menuLateralItem:{
        marginTop: '8%',
        marginBottom: '5%',
        textAlign: 'left',
        marginLeft: '10px',
        fontWeight: '500'
    },
    menuLateralIconArrow: {
        transform: 'translateY(18%)',
        marginLeft: '10px'
    },
})

function MenuLateralItem(props) {

    const {icon, url, titulo} = props
    const classes = useStyles()
    return (
        <Link to={url} className={classes.menuLink}>
            <div className={classes.menuLateralItemArrow}>
                <div className={classes.menuLateralIconArrow}>
                    {icon}
                </div>
                <div className={classes.menuLateralItem}>{titulo}</div>
            </div>
        </Link>

    )
}

export default MenuLateralItem;