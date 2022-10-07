import { makeStyles } from "@material-ui/styles"
import { CompareArrows } from "@mui/icons-material"
import Cores from "./util/cores"



const menuWidth = '12%'
const restoWidth = '88%'

const useStyles = makeStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.7em',
            height: '0.7em',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: Cores.azul2,
            outline: '1px solid ' + Cores.azul5,
            borderRadius: '100px'
        }
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Cores.azul0,
        height: '100%',
        position: 'absolute',
        width: '100%',
        minWidth: '100%'
    },
    body: {
        display: 'flex',
    },
    menuLateral: {
        backgroundColor: Cores.azul1,
        height: '100%',
        width: menuWidth,
        minHeight: '100%',
        position: 'fixed',
        zIndex: '6',
        borderRight: '3px solid' + Cores.azul3,
    },
    menuRecolhido: {
        '& .MuiSvgIcon-root': {
            color: Cores.azul5,
            marginTop: '1%',
            fontSize: '3.6rem'
        },
        '& .MuiButton-root': {
            padding: '0px'
        }
    },
    wrapper: {
        position: 'absolute',
        width: '96%',
        marginLeft: '3%',
        zIndex: 2
    },
    header: {
        position: 'relative',
        backgroundColor: Cores.azul1,
    },
    headerFaixa: {
        marginLeft: menuWidth,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '36px',
        paddingLeft: '6%',
        color: Cores.azul5
    },
    headerFaixaMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '36px',
        color: Cores.azul5,
    },
    headerTodo: {
        backgroundColor: Cores.azul1,
        paddingBottom: '1%',
        borderBottom: '3px solid' + Cores.azul3,
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
    versao: {
        position: 'fixed',
        bottom: '0',
        marginBottom: '1%',
        marginLeft: '3%',
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
        marginLeft: '1%',
    },
    paper: {
        marginTop: '1%',
        marginRight: '3%',
        padding: '1%',
        '& .MuiToolbar-root': {
            paddingLeft: '0px',
        },
    },
    subPaper: {
        marginTop: '1%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: '1%'
    },
    paperTitulo: {
        fontSize: '26px',
        marginLeft: '2%',
        display: 'flex',
        color: Cores.azul5
    },
    paperSubtitulo: {
        fontSize: '22px',
        marginLeft: '1%',
        display: 'flex',
        color: Cores.azul5,
        marginTop: '2%'
    },
    paperForm: {
        marginTop: '4%',
    },
    linhaForm: {
        height: '1px',
        background: Cores.azul5,
        width: '98%',
        marginTop: '1%',
        marginBottom: '2%'
    },
    buscar: {
        width: '75%',
    },
    botaoAdicionar: {

        marginLeft: '10px'
    },

})
export default useStyles;

