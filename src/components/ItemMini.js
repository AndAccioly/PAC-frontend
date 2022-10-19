import { makeStyles } from "@material-ui/core";
import Cores from "../util/cores";
import CloseIcon from '@mui/icons-material/Close'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    mini: {
        display: 'flex',
        marginLeft: '10px',
        justifyContent: 'space-between',
        backgroundColor: Cores.azul1,
        borderRadius: '10px',
        paddingLeft: '3%',
        marginTop: '7%',
        minWidth: '80px',
        '& .MuiSvgIcon-root': {
            marginLeft: '10px',
            backgroundColor: Cores.azul2,
            borderRadius: '10px',
            color: Cores.azul5,
            fontSize: '1.2rem',
            transform: 'translateY(10%)',
            '&:hover': {
                cursor: 'pointer',
                color: 'white',
                backgroundColor: Cores.vermelhoClose
            }
        },
    }
})

export default function ItemMini(props) {
    const { items, onClickRemove, nomes, setItems, isVisualizar } = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {items.map(
                (item, index) => {
                    return (
                        <div key={index} className={classes.mini}>
                            {isVisualizar ?
                                <div>
                                    {item}
                                </div>
                                :
                                <div>
                                    {nomes.filter(x => x.id === item).map(option => option.value)}
                                    <CloseIcon onClick={() => onClickRemove(item, items, setItems)} />
                                </div>
                            }

                        </div>
                    )
                })}
        </div>
    )
}