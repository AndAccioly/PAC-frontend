import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import { Search } from "@mui/icons-material";
import UseTable from '../../components/UseTable'
import AddIcon from '@mui/icons-material/Add'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Popup from '../../components/Popup'
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import ConsultaForm from "./ConsultaForm";
import ConsultaFiltro from "./ConsultaFiltro";
import Methods from "../../util/methods/Methods"
import BuscaAvancada from "../../components/BuscaAvancada";
import Icones from "../../util/icones";
import ConsultaVisualizarForm from "./ConsultaVisualizarForm";
import DeleteIcon from '@mui/icons-material/Delete';
import Services from "../../util/servicos";


const headCells = [
    { id: 'data', label: 'Data' },
    { id: 'hora', label: 'Horário' },
    { id: 'nome', label: 'Nome' },
    { id: 'consultorio', label: 'Consultório' },
    { id: 'atendimento', label: 'Atendimento' },
    { id: 'tipoConsulta', label: 'Tipo de Consulta' },
    { id: 'planoSaude', label: 'Plano de Saúde' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Consulta(props) {
    const classes = props.classes;

    const [records, setRecords] = useState(Services.consultaService.getAllConsultas())
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupVisualizar, setOpenPopupVisualizar] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(records, headCells, filterFn);

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Services.consultaService.deleteConsulta(id)
        setRecords(Services.consultaService.getAllConsultas())
        setNotify({
            isOpen: true,
            message: 'Removido com sucesso',
            type: 'success'
        })
    }
    const addOrEdit = (consulta, resetForm) => {
        console.log(consulta)
        if (consulta.id === 0)
            Services.consultaService.insertConsulta(consulta)
        else
            Services.consultaService.updateConsulta(consulta)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(Services.consultaService.getAllConsultas())
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

    const openInPopupVisualizar = item => {
        setRecordForEdit(item)
        setOpenPopupVisualizar(true)
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
                        onChange={e => Methods.handleSearchConsulta(e, setFilterFn)}
                    />
                    <Controls.Button
                        text='Agendar Consulta'
                        variant='outlined'
                        startIcon={Icones.addIcon}
                        className={classes.botaoAdicionar}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
                    />
                </Toolbar>
                <BuscaAvancada >
                    <ConsultaFiltro />
                </ BuscaAvancada>
                <div style={{ maxHeight: 600, overflow: 'auto' }}>
                    <TblContainer >
                        <TblHead />
                        <TableBody>
                            {recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id} onClick={() => { openInPopupVisualizar(item) }}>
                                    <TableCell>{item.agendamento}</TableCell>
                                    <TableCell>{item.hora}</TableCell>
                                    <TableCell>{item.pacienteTexto}</TableCell>
                                    <TableCell>{item.consultorioTexto}</TableCell>
                                    <TableCell>{item.funcionarioTexto}</TableCell>
                                    <TableCell>{item.tipoConsultaTexto}</TableCell>
                                    <TableCell>{item.planoSaudeTexto}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color='primary'
                                            onClick={(e) => { openInPopup(e, item) }}>
                                            <EditOutlinedIcon fontSize='small' />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color='secondary'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Deseja remover a consulta ' + item.nome + ' ?',
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
                title='Criar nova consulta'
            >
                <ConsultaForm
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </Popup>
            <Popup
                openPopup={openPopupVisualizar}
                setOpenPopup={setOpenPopupVisualizar}
                title='Consulta'
                maxWidth='lg'
            >
                <ConsultaVisualizarForm
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


export default Consulta;