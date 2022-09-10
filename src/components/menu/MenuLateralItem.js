
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

function MenuLateralItem(props) {
    const classes = props.classes

    return (
        <Link to={props.url} className={classes.menuLink}>
            <div className={classes.menuLateralItemArrow}>
                <ArrowRightIcon className={classes.menuLateralIconArrow} />
                <div className={classes.menuLateralItem}>{props.titulo}</div>
            </div>
        </Link>

    )
}

export default MenuLateralItem;