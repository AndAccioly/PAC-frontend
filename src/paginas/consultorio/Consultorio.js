import { Paper, TableBody } from "@mui/material";
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import { Search } from "@mui/icons-material";
import UseTable from '../../components/UseTable'
import AddIcon from '@mui/icons-material/Add'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import CloseIcon from '@mui/icons-material/Close'
import Popup from '../../components/Popup'
import Notificacao from "../../components/Notificacao";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import ConsultorioForm from "./ConsultorioForm";

const initialValues = [{
    id: '1',
    nome: 'Consultório 1',
    tipo: 'Cirurgia',
    responsavel: 'Médico José'
},
{
    id: '2',
    nome: 'Consultório 2',
    tipo: 'Odontológico',
    responsavel: 'Médica Joana',

},
]

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'responsavel', label: 'Responsável' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Consultorio(props) {
    const classes = props.classes;

    const [records, setRecords] = useState(initialValues)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [openPopup, setOpenPopup] = useState(false)
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

    return (
        <div>
            <Paper className={classes.paper}>
                <Controls.Button
                    text='Novo Consultório'
                    variant='outlined'
                    startIcon={<AddIcon />}
                    className={classes.botaoAdicionar}
                    onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
                />
                <div style={{maxHeight: 600, overflow: 'auto'}}>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.responsavel}</TableCell>
                                    <TableCell>{item.tipo}</TableCell>
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
                                            <CloseIcon fontSize='small' />
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
                <ConsultorioForm />
            </Popup>
        </div>
    )
}


export default Consultorio;