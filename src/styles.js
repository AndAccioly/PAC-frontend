import { makeStyles } from "@material-ui/styles"

const corAzul0 = '#ebf5fa'
const corAzul1 = '#cfedfc'
const corAzul2 = '#98d4f5'
const corAzul3 = '#4791ba'
const corAzul4 = '#205775'
const corAzul5 = '#1976d2'
const corAzul6 = '#125da6'

const menuWidth = '12%'
const restoWidth = '88%'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5e689',
        height: '100%',
        position: 'absolute',
        width: '100%',
        minWidth: '100%'
    },
    menuLateral: {
        backgroundColor: corAzul1,
        height: '100%',
        width: menuWidth,
        minHeight: '100%',
        position: 'fixed',
        zIndex: '5',
        borderRight: '2px solid' + corAzul3,
    },
    wrapper: {
        position: 'relative',
        backgroundColor: 'white',
    },
    header: {
        position: 'relative',
        backgroundColor: corAzul1,
        minHeight: '8%',
        marginLeft: menuWidth,
        width: restoWidth,
        zIndex: '5',
        display: 'flex',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'relative',
        backgroundColor: corAzul2,
        minHeight: '8%',
        marginLeft: menuWidth,
        width: restoWidth,
        zIndex: '1',
        bottom: '0',
    },
    conteudo: {
       
    },
    menuLinha: {
        height: '1px',
        background: corAzul3,
        width: '90%',
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '10%'
    },
    menuLateralItemArrow: {
        display: 'flex',
        paddingLeft: '10%',
        color: corAzul4,
        "&:hover": {
            background: corAzul0,
            cursor: 'pointer',
            color: corAzul4
        }
    },
    menuLateralIconArrow: {
        transform: 'translateY(20%)',
    },
    menuLateralItem:{
        marginTop: '5%',
        marginBottom: '5%',
        textAlign: 'left',
    },
    menuLateralItens:{
        marginTop: '10%',
    },
    menuLateralTopo:{
        height: '10%'
    },
    menuLink: {
        textDecoration: 'none',
        display: 'flex',
        color: corAzul4,
        "&:hover": {
            background: corAzul0,
            cursor: 'pointer',
            color: corAzul4
        }
    },
    versao: {
        position:'fixed',
        bottom: '0',
        marginBottom: '1%',
        marginLeft: '3%',
        color: corAzul5
    },
    headerTitulo: {
        fontSize: '35px',
        transform: 'translateY(20%)',
        marginLeft: '4%',
        color: corAzul5
    },
    logOut: {
        color: corAzul4,
        fontSize: '20px',
        marginRight: '4%',
        width: '7%',
       
    },
    logOutText: {
        transform: 'translateY(50%)',
        borderRadius: '50px',
        color: corAzul5,
        "&:hover": {
            background: corAzul0,
            cursor: 'pointer',
        }
    },
    paper: {
        marginTop: '1%',
        marginLeft: '15%',
        marginRight: '3%',
        padding: '1%'
    },
    paperTitulo:{
        fontSize: '26px',
        marginLeft: '2%',
        display: 'flex',
        color: corAzul5
    },
    paperSubtitulo:{
        fontSize: '20px',
        marginLeft: '1%',
        display: 'flex',
        color: corAzul5,
        marginTop: '2%'
    },
    paperForm:{
        marginTop: '4%',
    },
    linhaForm:{
        height: '1px',
        background: corAzul5,
        width: '98%',
        marginTop: '2%',
        marginBottom: '2%'
    },
    buscar: {
        width: '75%'
    }
    
    
})
export default useStyles;

