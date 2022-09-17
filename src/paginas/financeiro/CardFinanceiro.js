import { CardContent, Card, Typography, CardHeader } from "@mui/material";
import { makeStyles } from '@material-ui/core'
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";
import Controls from '../../components/controls/Controls'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import CloseIcon from '@mui/icons-material/Close'
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles({
    root: {
        width: '18%',
        margin: '1%',
        height: '90%',
    },
    header: {
        textAlign: 'left',
        backgroundColor: Cores.azul1,
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contentPositivo: {
        fontSize: '30px',
        marginBottom: '3%',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: Cores.verde0,
        }
    },
    contentNegativo: {
        fontSize: '30px',
        marginBottom: '3%',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: Cores.vermelho0,
        }
    },
    botoes: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        
    },
    negativo: {
        paddingBottom: '10%',
        color: Cores.vermelhoNegativo,
    },
    positivo: {
        paddingBottom: '10%',
        color: Cores.verdePositivo, 
    }
})

export default function CardFinanceiro(props) {
    const { title, subtitle, content } = props
    const classes = useStyles()
    return (

        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                title={
                    <div className={classes.headerContent}>
                        {title}
                        <Controls.ActionButton className={classes.teste} color='primary'>
                            <EditOutlinedIcon fontSize='small' />
                        </Controls.ActionButton>
                    </div>
                }
                subheader={subtitle || ""}>

            </CardHeader>
            <CardContent className={content < 0 ? classes.contentNegativo : classes.contentPositivo}>
                <div className={content < 0 ? classes.negativo : classes.positivo}>
                    {Mascaras.dinheiro(content.replace('-', ''))}
                </div>
            </CardContent>
            <div className={classes.botoes}>
                <Controls.ActionButton color='primary'>
                    <LockIcon fontSize='medium' />
                </Controls.ActionButton>
                <Controls.ActionButton color='secondary'>
                    <CloseIcon fontSize='medium' />
                </Controls.ActionButton>
            </div>

        </Card>

    )
}