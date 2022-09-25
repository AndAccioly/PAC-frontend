import { makeStyles } from "@material-ui/styles"
import { CompareArrows } from "@mui/icons-material"
import Cores from "./util/cores"



const menuWidth = '12%'
const restoWidth = '88%'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Cores.azul0,
        height: '100%',
        position: 'absolute',
        width: '100%',
        minWidth: '100%'
    },
    menuLateral: {
        backgroundColor: Cores.azul1,
        height: '100%',
        width: menuWidth,
        minHeight: '100%',
        position: 'fixed',
        zIndex: '6',
        borderRight: '2px solid' + Cores.azul3,
    },
    menuRecolhido: {
        width: menuWidth,
        position: 'fixed',
        zIndex: '5',
        '& .MuiSvgIcon-root': {
            color: Cores.azul5,
            marginTop: '5%',
            fontSize: '3.6rem'
        }
    },
    wrapper: {
        position: 'relative',
    },
    header: {
        position: 'relative',
        backgroundColor: Cores.azul1,
        minHeight: '100%',
        marginLeft: menuWidth,
        width: restoWidth,
        zIndex: '5',
        display: 'flex',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'relative',
        backgroundColor: Cores.azul2,
        minHeight: '8%',
        marginLeft: menuWidth,
        width: restoWidth,
        zIndex: '1',
        bottom: '0',
    },
    menuLinha: {
        height: '1px',
        background: Cores.azul3,
        width: '90%',
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '10%'
    },
    headerLinha: {
        height: '1px',
        background: Cores.azul3,
        width: '100%',
    },
    headerTodo:{
        position: 'relative',
        backgroundColor: Cores.azul1,
        minHeight: '8%',
    },
    menuLateralItens:{
        marginTop: '10%',
    },
    versao: {
        position:'fixed',
        bottom: '0',
        marginBottom: '1%',
        marginLeft: '3%',
        color: Cores.azul5
    },
    headerFaixa: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        fontSize: '35px',
        marginLeft: '4%',
        color: Cores.azul5
    },
    logOut: {
        color: Cores.azul4,
        fontSize: '20px',
        marginRight: '4%',
        width: '7%',
       
    },
    logOutText: {
        transform: 'translateY(50%)',
        borderRadius: '50px',
        color: Cores.azul5,
        "&:hover": {
            background: Cores.azul0,
            cursor: 'pointer',
        }
    },
    paperMobile: {
        marginLeft: '3%',
    },
    paperWeb: {
        marginLeft: '15%',
    },
    paper: {
        marginTop: '1%',
        marginRight: '3%',
        padding: '1%'
    },
    subPaper: {
        marginTop: '1%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: '1%'
    },
    paperTitulo:{
        fontSize: '26px',
        marginLeft: '2%',
        display: 'flex',
        color: Cores.azul5
    },
    paperSubtitulo:{
        fontSize: '22px',
        marginLeft: '1%',
        display: 'flex',
        color: Cores.azul5,
        marginTop: '2%'
    },
    paperForm:{
        marginTop: '4%',
    },
    linhaForm:{
        height: '1px',
        background: Cores.azul5,
        width: '98%',
        marginTop: '1%',
        marginBottom: '2%'
    },
    buscar: {
        width: '75%'
    },
    botaoAdicionar:{
        
        marginLeft: '10px'
    },
    
})
export default useStyles;

