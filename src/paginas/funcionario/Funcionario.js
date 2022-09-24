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
import FuncionarioForm from "./FuncionarioForm";

const initialValues = [{
    id: '1',
    nome: 'João dos Testes',
    cpf: '123.456.789-10',
    funcao: 'Médico',
    matricula: 'M00001',
    consultorio: 'Consultório 1',
    atendimento: 'José Torres'
},
{
    id: '2',
    nome: 'Maria das Dores',
    cpf: '123.456.789-10',
    matricula: 'S00002',
    funcao: 'Secretária',
    consultorio: 'Consultório 2',
    atendimento: 'Jurema',

},
]

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'matricula', label: 'Matrícula' },
    { id: 'consultorio', label: 'Consultório' },
    { id: 'funcao', label: 'Função' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]


function Funcionario(props) {
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
                    text='Adicionar funcionário'
                    variant='outlined'
                    startIcon={<AddIcon />}
                    className={classes.botaoAdicionar}
                    onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
                />
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.matricula}</TableCell>
                                <TableCell>{item.consultorio}</TableCell>
                                <TableCell>{item.funcao}</TableCell>
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
            </Paper>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Criar nova consulta'
            >
                <FuncionarioForm />
            </Popup>
        </div>
    )
}


export default Funcionario;