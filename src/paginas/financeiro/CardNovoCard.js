import { CardContent, Card, Typography, CardHeader } from "@mui/material";
import { makeStyles } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import Cores from "../../util/cores";
import Popup from "../../components/Popup";
import { useState } from "react";
import ItemFinanceiroForm from "./ItemFinanceiroForm";

const useStyles = makeStyles({
    root: {
        width: '150px',
        minWidth: '150px',
        margin: '1%',
    },
    header: {
        textAlign: 'left',
        backgroundColor: Cores.azul1,
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        marginTop: '3%',
        '& .MuiSvgIcon-root': {
            backgroundColor: Cores.azul1,
            color: Cores.azul5,
            borderRadius: '70px',
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
    const { title, subtitle, content } = props
    const [openPopup, setOpenPopup] = useState(false)

    const openInPopup = () => {
        setOpenPopup(true)
    }

    const classes = useStyles()
    return (

        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                title='Novo'
            >

            </CardHeader>
            <CardContent className={classes.content}>
                <AddIcon
                    onClick={() => { openInPopup() }}
                />

            </CardContent>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Inserir novo item financeiro'
            >
                <ItemFinanceiroForm />

            </Popup>
        </Card>

    )
}