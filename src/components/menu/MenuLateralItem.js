
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function MenuLateralItem(props){
    const classes = props.classes

    return(
        <div className={classes.menuLateralItemArrow}>
            <ArrowRightIcon className={classes.menuLateralIconArrow}/>
            <div className={classes.menuLateralItem}>{props.titulo}</div>
        </div>

    )
}

export default MenuLateralItem;