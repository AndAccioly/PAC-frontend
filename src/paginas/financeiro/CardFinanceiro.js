import { CardContent, Card, CardHeader } from "@mui/material";
import { makeStyles } from '@material-ui/core'
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";
import Controls from '../../components/controls/Controls'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles({
    root: {
        width: '280px',
        minWidth: '180px',
        margin: '1%',
        paddingBottom: '1%'
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
        fontSize: '36px',
        marginBottom: '2%',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: Cores.verde0,
        }
    },
    contentNegativo: {
        fontSize: '36px',
        marginBottom: '2%',
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
    const { itemFinanceiro, title, subtitle, content, onClickPopup, onClickPopupVisualizar } = props
    const classes = useStyles()

    return (

        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                title={
                    <div className={classes.headerContent}>
                        {title}
                        <Controls.ActionButton
                            className={classes.teste} color='primary'
                            onClick={() => { onClickPopup(itemFinanceiro.items) }}
                        >
                            <EditOutlinedIcon fontSize='small' />
                        </Controls.ActionButton>
                    </div>
                }
                subheader={subtitle || ""}>

            </CardHeader>
            <CardContent className={content < 0 ? classes.contentNegativo : classes.contentPositivo} onClick={() => { onClickPopupVisualizar(itemFinanceiro.items) }}>
                <div className={content < 0 ? classes.negativo : classes.positivo}>
                    {Mascaras.dinheiroCifrao(content.replace('-', ''))}
                </div>
            </CardContent>
            <div className={classes.botoes}>
                <Controls.ActionButton color='primary'>
                    <LockIcon fontSize='medium' />
                </Controls.ActionButton>
                <Controls.ActionButton color='secondary'>
                    <DeleteIcon fontSize='medium' />
                </Controls.ActionButton>
            </div>

        </Card>

    )
}