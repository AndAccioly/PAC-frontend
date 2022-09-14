import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import PacienteCadastroForm from "./PacienteCadastroForm";
import UseTable from '../../UseTable'
import * as PacienteService from '../../../services/pacienteService'
import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import Controls from "../../controls/Controls";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

const headCells = [
    { id: 'nome', label: 'Nome' },
    { id: 'cpf', label: 'CPF' },
    { id: 'email', label: 'Email' },
    { id: 'planoSaude', label: 'Plano de Saúde', disableSorting: true },
]

function Paciente(props) {
    const classes = props.classes

    const [records, setRecords] = useState(PacienteService.getAllPacientes)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = UseTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target
        setFilterFn({
            fn: items => {
                if (target.value == '')
                    return items
                else
                    return items.filter(x => x.nome.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <div className={classes.paperTitulo}>Cadastrar Paciente</div>
                <div className={classes.linhaForm}></div>
                <PacienteCadastroForm classes={classes} />
            </Paper>
            <Paper className={classes.paper}>
                <Toolbar >
                    <Controls.Input
                        className={classes.buscar}
                        label='Procurar paciente'
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>)
                        }}
                        onChange={ handleSearch }
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.cpf}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.planoSaudeTexto}</TableCell>
                            </TableRow>
                        )

                        )}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </div>
    )
}


export default Paciente;