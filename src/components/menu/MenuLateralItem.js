import { Link } from "react-router-dom";

function MenuLateralItem(props) {
    const classes = props.classes

    return (
        <Link to={props.url} className={classes.menuLink}>

            <div className={classes.menuLateralItem}>{props.titulo}</div>

        </Link>

    )
}

export default MenuLateralItem;