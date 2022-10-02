import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import { Search } from "@mui/icons-material";
import UseTable from '../../components/UseTable'
import Methods from '../../util/methods/Methods'
import AddIcon from '@mui/icons-material/Add'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from '../../components/Popup'
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import ConsultorioForm from "./ConsultorioForm";
import ConsultorioVisualizarForm from "./ConsultorioVisualizarForm";
import Icones from "../../util/icones";
import Services from "../../util/servicos"

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'responsavel', label: 'Responsável' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Consultorio(props) {
    const classes = props.classes;

    const [records, setRecords] = useState(Services.consultorioService.getAllConsultorios())
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupEditar, setOpenPopupEditar] = useState(false)
    const [openPopupVisualizar, setOpenPopupVisualizar] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(records, headCells, filterFn);

    const onDelete = id => {


    }

    const addOrEdit = (consultorio, resetForm) => {
        if (consultorio.id === 0)
            Services.consultorioService.insertConsultorio(consultorio)
        else
            Services.consultorioService.updateConsultorio(consultorio)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(Services.consultorioService.getAllConsultorios())
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const openInPopup = (e, item) => {
        e.preventDefault()
        e.stopPropagation()
        //setRecordForEdit(item)
        setOpenPopup(true)
    }

    const openInPopupVisualizar = item => {
        //setRecordForEdit(item)
        setOpenPopupVisualizar(true)
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <Toolbar >
                    <Controls.Input
                        className={classes.buscar}
                        label='Procurar consultório'
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>{Icones.searchIcon}</InputAdornment>)
                        }}
                        onChange={e => Methods.handleSearchConsultorio(e, setFilterFn)}
                    />
                    <Controls.Button
                        text='Cadastrar Consultório'
                        variant='outlined'
                        startIcon={Icones.addIcon}
                        className={classes.botaoAdicionar}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
                    />
                </Toolbar>

                <div style={{ maxHeight: 600, overflow: 'auto' }}>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id} onClick={() => openInPopupVisualizar(item)}>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.responsavel}</TableCell>
                                    <TableCell>{item.tipo}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color='primary'
                                            onClick={(e) => { openInPopup(e, item) }}>
                                            <EditOutlinedIcon fontSize='small' />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color='secondary'
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Deseja remover o cliente?',
                                                    subtitle: 'Esta ação não poderá ser desfeita.',
                                                    onConfirm: () => { onDelete(item.id) }
                                                })
                                            }}>
                                            <DeleteIcon fontSize='small' />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>
                            )

                            )}
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                </div>
            </Paper>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Cadastrar Consultório'

            >
                <ConsultorioForm
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </Popup>
            <Popup

                openPopup={openPopupVisualizar}
                setOpenPopup={setOpenPopupVisualizar}
                title='Consultório Detalhado'
            >
                <ConsultorioVisualizarForm />
            </Popup>
        </div>
    )
}


export default Consultorio;