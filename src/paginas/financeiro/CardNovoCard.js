import { makeStyles } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import Cores from "../../util/cores";
import Popup from "../../components/Popup";
import { useState } from "react";
import ItemFinanceiroForm from "./ItemFinanceiroForm";
import Services from "../../util/servicos";
import Notificacao from "../../components/Notificacao";


const useStyles = makeStyles({
    root: {
        width: '150px',
        marginLeft: '3%',
        marginTop: '6%',
    },
    content: {
        '& .MuiSvgIcon-root': {
            backgroundColor: Cores.azul1,
            color: Cores.azul5,
            borderRadius: '10px',
            fontSize: '7rem',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: Cores.azul2,
                color: Cores.azul6,
            }
        }
    }
})

export default function CardFinanceiro(props) {
    const { setRecords, consultorio } = props
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

    const openInPopup = () => {
        setOpenPopup(true)
    }

    const addOrEdit = (item, resetForm) => {
        if (item.id === 0)
            Services.financeiroService.insertCardFinanceiro({...item, consultorioId: consultorio.id})
        resetForm()
        setOpenPopup(false)
        setRecords(Services.financeiroService.getAllCardsFinanceiros(consultorio.id))
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const classes = useStyles()
    return (

        <div className={classes.root}>
            <div className={classes.content}>
                <AddIcon
                    onClick={() => { openInPopup() }}
                />

            </div>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Inserir novo item financeiro'
            >
                <ItemFinanceiroForm 
                    addOrEdit={addOrEdit}
                    recordForEdit={null}
                />

            </Popup>
            <Notificacao
                notify={notify}
                setNotify={setNotify}
            />
        </div>

    )
}