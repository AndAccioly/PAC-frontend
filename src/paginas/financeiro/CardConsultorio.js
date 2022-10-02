import { Typography, Paper, TableBody, Box } from "@mui/material";
import CardFinanceiro from "./CardFinanceiro";
import CardNovoCard from "./CardNovoCard";
import { makeStyles, TableCell, TableRow } from '@material-ui/core'
import Mascaras from '../../util/mascaras'
import Cores from "../../util/cores";
import { useState } from "react";
import UseTable from '../../components/UseTable'
import Controls from "../../components/controls/Controls";
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import ReceitaForm from "./ReceitaForm";


const initialValues = {
    itensFinanceiros: [
        {
            id: 1,
            tipoFinanceiro: 'despesa',
            tipo: 'materiais',
            nome: 'Materiais descartáveis',
            receitas: [
                {
                    id: 1,
                    nome: 'Caixa de Luvas',
                    quantidade: '10',
                    data: new Date(),
                    valor: '205.00'
                },
                {
                    id: 2,
                    nome: 'Caixa de Máscaras',
                    quantidade: '10',
                    data: new Date(),
                    valor: '150.00'
                },
                {
                    id: 3,
                    nome: 'Óculos de proteção',
                    quantidade: '3',
                    data: new Date(),
                    valor: '100.00'
                },
                {
                    id: 4,
                    nome: 'Papel',
                    quantidade: '50',
                    data: new Date(),
                    valor: '25.00'
                },
                {
                    id: 5,
                    nome: 'Plástico de proteção',
                    quantidade: '50',
                    data: new Date(),
                    valor: '100.00'
                },
                {
                    id: 6,
                    nome: 'Avental',
                    quantidade: '2',
                    data: new Date(),
                    valor: '150.00'
                },
            ]
        },
        {
            id: 2,
            tipoFinanceiro: 'lucro',
            tipo: 'consultas',
            nome: 'Consultas',
            receitas: [
                {
                    id: 3,
                    nome: 'João dos testes',
                    quantidade: '',
                    data: new Date(),
                    valor: 250,
                },
                {
                    id: 4,
                    nome: 'Maria das dores',
                    quantidade: '',
                    data: new Date(),
                    valor: 150
                },
            ]
        }
    ]
}


const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'quantidade', label: 'Quantidade' },
    { id: 'valor', label: 'Valor' },
    { id: 'actions', label: 'Ações', disableSorting: true }
]

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginBottom: '2%',
    },
    header: {
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        color: Cores.azul5,
        '& .MuiTypography-root': {
            fontSize: '30px'
        }
    },
    linhaForm: {
        height: '2px',
        background: Cores.azul5,
        marginTop: '0.5%',
        marginBottom: '2.5%'
    },
    negativo: {
        color: Cores.vermelhoNegativo,
    },
    positivo: {
        color: Cores.verdePositivo,
    }
})

export default function CardConsultório(props) {

    const { total, consultorio } = props
    const classes = useStyles()

    const [records, setRecords] = useState(initialValues.itensFinanceiros[0].receitas[0])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const [itensFinanceiros, setItensFinanceiros] = useState(initialValues.itensFinanceiros)
    const [openPopup, setOpenPopup] = useState(false)
    const [isVisualizar, setIsVisualizar] = useState(false)

    const openInPopup = () => {
        setIsVisualizar(false)
        setOpenPopup(true)
    }

    const openPopupVisualizar = () => {
        setIsVisualizar(true)
        setOpenPopup(true)
    }

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(initialValues.itensFinanceiros[0].receitas, headCells, filterFn);


    return (
        <div>
            <div className={classes.header}>
                <Typography> {consultorio} </Typography>
                <Typography className={total < 0 ? classes.negativo : classes.positivo}> {Mascaras.dinheiroCifrao(total)} </Typography>
            </div>
            <div className={classes.linhaForm}></div>

            <div className={classes.root} style={{overflow: 'auto'}}>
                <CardFinanceiro
                    title='Materiais'
                    content='-100.00'
                    classes={props.classes}
                    itemFinanceiro={initialValues.itensFinanceiros[0]}
                    onClickPopup={openInPopup}
                    onClickPopupVisualizar={openPopupVisualizar}
                />
                <CardFinanceiro
                    title='Funcionários'
                    content='-300.00'
                    classes={props.classes}
                    itemFinanceiro={initialValues.itensFinanceiros[0]}
                    onClickPopup={openInPopup}
                    onClickPopupVisualizar={openPopupVisualizar}
                />
                <CardFinanceiro
                    title='Consultas'
                    content='600.00'
                    classes={props.classes}
                    itemFinanceiro={initialValues.itensFinanceiros[0]}
                    onClickPopup={openInPopup}
                    onClickPopupVisualizar={openPopupVisualizar}
                />
                <CardNovoCard
                    title='Consultas'
                    content='600.00'
                    classes={props.classes}
                    onClickPopup={openInPopup}
                />
            </div>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title={isVisualizar ? 'Visualizar item' : 'Inserir novo item'}
                maxWidth='lg'
            >
                <Paper className={classes.paper} style={{ maxHeight: 600, overflow: 'auto' }}>
                    {isVisualizar ?
                        <div></div>
                        :
                        <ReceitaForm
                            receitas={initialValues.itensFinanceiros[0].receitas}
                        />
                    }
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id} >
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.quantidade}</TableCell>
                                    <TableCell>{Mascaras.dinheiroCifrao(item.valor)}</TableCell>
                                    <TableCell style={{display: 'flex'}}>
                                        <Controls.ActionButton
                                            color='primary'
                                        >
                                            <EditOutlinedIcon fontSize='small' />
                                        </Controls.ActionButton>

                                        <Controls.ActionButton
                                            color='secondary'
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




        </div>
    )
}