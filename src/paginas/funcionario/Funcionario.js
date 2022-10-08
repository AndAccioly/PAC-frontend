import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import { Search } from "@mui/icons-material";
import UseTable from '../../components/UseTable'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from '../../components/Popup'
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import FuncionarioForm from "./FuncionarioForm";
import Methods from "../../util/methods/Methods"
import Icones from "../../util/icones";
import Services from "../../util/servicos";
import FuncionarioVisualizarForm from "./FuncionarioVisualizarForm";

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'matricula', label: 'Matrícula' },
    { id: 'funcao', label: 'Função' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Funcionario(props) {
    const classes = props.classes;

    const [records, setRecords] = useState(Services.funcionarioService.getAllFuncionarios())
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

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Services.funcionarioService.deleteFuncionario(id)
        setRecords(Services.funcionarioService.getAllFuncionarios())
        setNotify({
            isOpen: true,
            message: 'Removido com sucesso',
            type: 'success'
        })

    }

    const addOrEdit = (funcionario, resetForm) => {
        console.log(funcionario)
        if (funcionario.id === 0)
            Services.funcionarioService.insertFuncionario(funcionario)
        else
            Services.funcionarioService.updateFuncionario(funcionario)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(Services.funcionarioService.getAllFuncionarios())
        setNotify({
            isOpen: true,
            message: 'Inserido com sucesso',
            type: 'success'
        })
    }

    const openInPopupVisualizar = item => {
        console.log(item)
        setRecordForEdit(item)
        setOpenPopupVisualizar(true)
    }

    const openInPopup = (e, item) => {
        e.preventDefault()
        e.stopPropagation()
        setRecordForEdit(item)
        setOpenPopup(true)
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
                        text='Adicionar funcionário'
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
                                    <TableCell>{item.matricula}</TableCell>
                                    <TableCell>{item.cargoTexto}</TableCell>
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
                                                    title: 'Deseja remover o funcionário ' + item.nome + ' ?',
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
                openPopup={openPopupVisualizar}
                setOpenPopup={setOpenPopupVisualizar}
                title='Funcionário'
            >
                <FuncionarioVisualizarForm
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </Popup>
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Cadastrar Funcionário'
            >
                <FuncionarioForm
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


export default Funcionario;