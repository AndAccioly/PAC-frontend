import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Cores from '../../util/cores';
import Media from 'react-media'

const useStyles = makeStyles({
    menuLateralItemArrow: {
        display: 'flex',
        paddingLeft: '10%',
        color: Cores.azul5,
        "&:hover": {
            background: Cores.azul0,
            cursor: 'pointer',
            color: Cores.azul5
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
    menuLateralItem: {
        marginTop: '8%',
        marginBottom: '5%',
        textAlign: 'left',
        marginLeft: '10px',
        fontWeight: '500'
    },
    menuIconWeb: {
        transform: 'translateY(18%)',
        marginLeft: '10px'
    },
    menuIconMobile: {
        transform: 'translateY(30%)',
        marginLeft: '10px'
    },
})

function MenuLateralItem(props) {

    const { icon, url, titulo, onClick } = props
    const classes = useStyles()
    return (
        <Link to={url} className={classes.menuLink} onClick={() => { onClick() }}>
            <div className={classes.menuLateralItemArrow}>
                <Media queries={{ small: { maxWidth: 699 } }}>
                    {matches =>
                        matches.small ? (
                            <div className={classes.menuIconMobile}>
                                {icon}
                            </div>
                        ) : (
                            <div className={classes.menuIconWeb}>
                                {icon}
                            </div>
                        )
                    }
                </Media>
                <div className={classes.menuLateralItem}>{titulo}</div>
            </div>
        </Link>

    )
}

export default MenuLateralItem;