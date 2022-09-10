import { makeStyles } from "@material-ui/styles"

const corAzul1 = '#cfedfc'
const corAzul2 = '#98d4f5'
const corAzul3 = '#4791ba'

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
        width: '15%',
        minHeight: '100%',
        position: 'fixed',
    },
    wrapper: {
        position: 'relative',
        backgroundColor: 'white',
        minHeight: '80%',
        marginLeft: '15%',
    },
    header: {
        position: 'relative',
        backgroundColor: corAzul2,
        minHeight: '10%',
        marginLeft: '15%',
        width: '100%',
        zIndex: '5'
    },
    footer: {
        position: 'relative',
        backgroundColor: corAzul2,
        minHeight: '10%',
        marginLeft: '15%',
        zIndex: '1',
        bottom: '0',
        width: '85%'
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
        "&:hover": {
            background: corAzul2,
            cursor: 'pointer',
        }
    },
    menuLateralIconArrow: {
        transform: 'translateY(35%)',
    },
    menuLateralItem:{
        marginTop: '5%',
        marginBottom: '5%',
        textAlign: 'left',
    },
    menuLateralItens:{
        marginTop: '10%'
    },
    menuLateralTopo:{
        height: '10%'
    },
    versao: {
        position:'fixed',
        bottom: '0',
        marginBottom: '1%',
        marginLeft: '3%',
        color: corAzul3
    }
    
})
export default useStyles;

