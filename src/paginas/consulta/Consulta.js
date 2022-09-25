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
import ConsultaForm from "./ConsultaForm";

const initialValues = [{
    id: '1',
    data: '10/11/2022',
    nome: 'João dos Testes',
    cpf: '123.456.789-10',
    tipo: 'Ortopedia',
    hora: '12:00',
    consultorio: 'Consultório 1',
    atendimento: 'Médico José'
},
{
    id: '2',
    data: '10/11/2022 12',
    nome: 'Maria das Dores',
    hora: '12:30',
    cpf: '123.456.789-10',
    tipo: 'Buco Maxilo',
    consultorio: 'Consultório 2',
    atendimento: 'Médica Joana',

},
]

const headCells = [
    { id: 'data', label: 'Data' },
    { id: 'hora', label: 'Hora' },
    { id: 'nome', label: 'Nome' },
    { id: 'cpf', label: 'CPF' },
    { id: 'consultorio', label: 'Consultório' },
    { id: 'atendimento', label: 'Atendimento' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Consulta(props) {
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
                    text='Agendar Consulta'
                    variant='outlined'
                    startIcon={<AddIcon />}
                    className={classes.botaoAdicionar}
                    onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
                />
                <div style={{maxHeight: 600, overflow: 'auto'}}>
                <TblContainer >
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.data}</TableCell>
                                <TableCell>{item.hora}</TableCell>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.cpf}</TableCell>
                                <TableCell>{item.consultorio}</TableCell>
                                <TableCell>{item.atendimento}</TableCell>
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
                <ConsultaForm />
            </Popup>
        </div>
    )
}


export default Consulta;