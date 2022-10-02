import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import PacienteCadastroForm from "./PacienteCadastroForm";
import UseTable from '../../components/UseTable'
import * as pacienteService from '../../services/pacienteService'
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from '../../components/Popup'
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import Methods from "../../util/methods/Methods"
import PacienteVisualizarForm from "./PacienteVisualizarForm";
import Icones from "../../util/icones";

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'cpf', label: 'CPF' },
    { id: 'email', label: 'Email' },
    { id: 'planoSaude', label: 'Plano de Saúde', disableSorting: true },
    { id: 'actions', label: 'Ações', disableSorting: true }
]

function Paciente(props) {
    const classes = props.classes

    const [records, setRecords] = useState(pacienteService.getAllPacientes)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupFicha, setOpenPopupFicha] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(records, headCells, filterFn);

    const addOrEdit = (paciente, resetForm) => {
        if (paciente.id === 0)
            pacienteService.insertPaciente(paciente)
        else
            pacienteService.updatePaciente(paciente)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(pacienteService.getAllPacientes)
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const openInPopup = (e, item) => {
        e.preventDefault()
        e.stopPropagation()
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const openInPopupFicha = item => {
        setRecordForEdit(item)
        setOpenPopupFicha(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        pacienteService.deletePaciente(id)
        setRecords(pacienteService.getAllPacientes)
        setNotify({
            isOpen: true,
            message: 'Removido com sucesso',
            type: 'success'
        })

    }

    return (
        <div>
            <Paper className={classes.paper}>
                <Toolbar >
                    <Controls.Input
                        className={classes.buscar}
                        label='Procurar paciente'
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>{Icones.searchIcon}</InputAdornment>)
                        }}
                        onChange={e => Methods.handleSearch(e, setFilterFn)}
                    />
                    <Controls.Button
                        text='Novo Paciente'
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
                                <TableRow key={item.id} onClick={() => { openInPopupFicha(item) }}>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.cpf}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.planoSaudeTexto}</TableCell>
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
                </div>
                <TblPagination />
            </Paper>
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Cadastrar Cliente'
            >
                <PacienteCadastroForm classes={classes}
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />

            </Popup>
            <Popup
                openPopup={openPopupFicha}
                setOpenPopup={setOpenPopupFicha}
                title='Ficha do Cliente'
                maxWidth='xg'
            >
                <PacienteVisualizarForm classes={classes}
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
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
        </div>
    )
}


export default Paciente;