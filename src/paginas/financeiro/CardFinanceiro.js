import { CardContent, Card, CardHeader } from "@mui/material";
import { makeStyles, TableCell, TableRow } from '@material-ui/core'
import { Paper, TableBody } from "@mui/material";
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";
import Controls from '../../components/controls/Controls'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import UseTable from '../../components/UseTable'
import Popup from "../../components/Popup";
import ReceitaForm from "./ReceitaForm";
import { useState } from "react";
import Services from "../../util/servicos";
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import ItemFinanceiroForm from "./ItemFinanceiroForm";

const useStyles = makeStyles({
    root: {
        width: '280px',
        minWidth: '180px',
        paddingBottom: '1%',
        margin: '1%',
        marginLeft: '10px'
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

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'quantidade', label: 'Quantidade' },
    { id: 'valor', label: 'Valor Unitário' },
    { id: 'total', label: 'Total' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function CardFinanceiro(props) {
    const { cardFinanceiro, setRecords } = props
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupEditCard, setOpenPopupEditCard] = useState(false)
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '' })
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

    const classes = useStyles()


    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(cardFinanceiro.itensFinanceiros, headCells, filterFn);

    const openInPopupEditCard = () => {
        setOpenPopupEditCard(true)
    }

    const openInPopup = () => {
        setOpenPopup(true)
    }

    const openPopupVisualizar = () => {
        setOpenPopup(true)
    }

    
    const editCard = (item) => {
        Services.financeiroService.updateCardFinanceiro(item)
        setOpenPopupEditCard(false)
        setRecords(item)
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const addOrEditReceita = (item, resetForm) => {
        let valorNovo = Number(cardFinanceiro.valor) + (Number(item.quantidade) * Number(Mascaras.numeroInteiro(item.valor)))
        let itens = cardFinanceiro.itensFinanceiros
        item = { ...item, id: Services.financeiroService.generateItemFinanceiroId() }
        itens.push(item)

        let cardAtt = { ...cardFinanceiro, valor: valorNovo.toString(), itensFinanceiros: itens }
        Services.financeiroService.updateCardFinanceiro(cardAtt)
        resetForm()
        setRecords()
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const onDeleteReceita = (item) => {
        let id = item.id
        let valorNovo = Number(cardFinanceiro.valor) - Number(item.quantidade) * Number(Mascaras.numeroInteiro(item.valor))
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        let itens = cardFinanceiro.itensFinanceiros.filter(x => x.id !== id)

        Services.financeiroService.updateCardFinanceiro({ ...cardFinanceiro, valor: valorNovo.toString(), itensFinanceiros: itens })
        setRecords(Services.financeiroService.getAllCardsFinanceiros())
        setNotify({
            isOpen: true,
            message: 'Removido com sucesso',
            type: 'success'
        })
    }


    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Services.financeiroService.deleteCardFinanceiro(id)
        setRecords(Services.financeiroService.getAllCardsFinanceiros())
        setNotify({
            isOpen: true,
            message: 'Removido com sucesso',
            type: 'success'
        })
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                subheader={cardFinanceiro.tipo}
                title={
                    <div className={classes.headerContent}>
                        {cardFinanceiro.nome}
                        <Controls.ActionButton
                            className={classes.teste} color='primary'
                            onClick={() => { openInPopupEditCard() }}
                        >
                            <EditOutlinedIcon fontSize='small'
                            />
                        </Controls.ActionButton>
                    </div>
                }>

            </CardHeader>
            <CardContent className={cardFinanceiro.categoria === 'despesa' ? classes.contentNegativo : classes.contentPositivo} onClick={() => { openPopupVisualizar(cardFinanceiro.items) }}>
                <div className={cardFinanceiro.categoria === 'despesa' ? classes.negativo : classes.positivo}>
                    {Mascaras.dinheiroCifrao(cardFinanceiro.valor.replace('-', ''))}
                </div>
            </CardContent>
            <div className={classes.botoes}>
                <Controls.ActionButton color='primary'  onClick={() => { openInPopup() }}>
                    <AddIcon fontSize='medium' />
                </Controls.ActionButton>
                <Controls.ActionButton color='secondary'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setConfirmDialog({
                            isOpen: true,
                            title: 'Deseja remover o card ' + cardFinanceiro.nome + ' ?',
                            subtitle: 'Esta ação não poderá ser desfeita.',
                            onConfirm: () => { onDelete(cardFinanceiro.id) }
                        })
                    }}
                >
                    <DeleteIcon fontSize='medium' />
                </Controls.ActionButton>
            </div>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title={'Inserir novo item'}
                maxWidth='lg'
            >
                <Paper className={classes.paper} style={{ maxHeight: 600, overflow: 'auto' }}>
                    <ReceitaForm
                        addOrEdit={addOrEditReceita}
                    />
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {recordsAfterPagingAndSorting().map((item, index) => (
                                <TableRow key={index} >
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.quantidade}</TableCell>
                                    <TableCell>{Mascaras.dinheiroCifrao(item.valor)}</TableCell>
                                    <TableCell>{Mascaras.dinheiroCifrao(Number(item.quantidade) * Number(Mascaras.numeroInteiro(item.valor)))}</TableCell>
                                    <TableCell style={{ display: 'flex' }}>
                                        <Controls.ActionButton
                                            color='secondary'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Deseja remover o item ' + item.nome + ' ?',
                                                    subtitle: 'Esta ação não poderá ser desfeita.',
                                                    onConfirm: () => { onDeleteReceita(item) }
                                                })
                                            }}
                                        >
                                            <DeleteIcon fontSize='small' />
                                        </Controls.ActionButton>

                                    </TableCell>

                                </TableRow>
                            )

                            )}
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                </Paper>
            </Popup>
            <Popup
                openPopup={openPopupEditCard}
                setOpenPopup={setOpenPopupEditCard}
                title='Editar card financeiro'
            >
                <ItemFinanceiroForm
                    addOrEdit={editCard}
                    recordForEdit={cardFinanceiro}
                />

            </Popup>
            <Notificacao
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />

        </Card>

    )
}