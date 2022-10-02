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
import ConsultaVisualizarForm from "./ConsultaVisualizar";
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = [{
    id: '1',
    data: '10/11/2022',
    nome: 'João dos Testes',
    cpf: '123.456.789-10',
    tipo: 'Ortopedia',
    hora: '12:00',
    planoSaude: 'Caixa',
    consultorio: 'Consultório 1',
    atendimento: 'Médico José'
},
{
    id: '2',
    data: '10/11/2022',
    nome: 'Maria das Dores',
    hora: '12:30',
    planoSaude: 'Camed',
    cpf: '785.798.458-52',
    tipo: 'Buco Maxilo',
    consultorio: 'Consultório 2',
    atendimento: 'Médica Joana',

},
]

const headCells = [
    { id: 'data', label: 'Data' },
    { id: 'hora', label: 'Horário' },
    { id: 'nome', label: 'Nome' },
    { id: 'consultorio', label: 'Consultório' },
    { id: 'atendimento', label: 'Atendimento' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'planoSaude', label: 'Plano de Saúde' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Consulta(props) {
    const classes = props.classes;

    const [records, setRecords] = useState(initialValues)
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

    }

    const openInPopup = item => {
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
                        label='Procurar paciente'
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>{Icones.searchIcon}</InputAdornment>)
                        }}
                        onChange={e => Methods.handleSearch(e, setFilterFn)}
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
                                    <TableCell>{item.data}</TableCell>
                                    <TableCell>{item.hora}</TableCell>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.consultorio}</TableCell>
                                    <TableCell>{item.atendimento}</TableCell>
                                    <TableCell>{item.tipo}</TableCell>
                                    <TableCell>{item.planoSaude}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color='primary'
                                            onClick={() => { openInPopup(item) }}>
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
                title='Criar nova consulta'
            >
                <ConsultaForm />
            </Popup>
            <Popup
                openPopup={openPopupVisualizar}
                setOpenPopup={setOpenPopupVisualizar}
                title='Consulta'
                maxWidth='lg'
            >
                <ConsultaVisualizarForm />
            </Popup>
        </div>
    )
}


export default Consulta;