import { makeStyles } from "@material-ui/styles"

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
        backgroundColor: '#cfedfc',
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
        backgroundColor: '#98d4f5',
        minHeight: '10%',
        marginLeft: '15%',
        width: '100%',
        zIndex: '5'
    },
    footer: {
        position: 'relative',
        backgroundColor: '#98d4f5',
        minHeight: '10%',
        marginLeft: '15%',
        zIndex: '1',
        bottom: '0',
        width: '85%'
    },
    conteudo: {
       
    }
    
})
export default useStyles;

