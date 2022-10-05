import { Table, TableHead, TableRow, TableCell, TablePagination } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Sort } from "@mui/icons-material"
import { TableSortLabel } from "@mui/material"
import { useState } from "react"
import Cores from "../util/cores"

const useStyles = makeStyles({
    table: {
        marginTop: '1%',
        '& thead th': {
            backgroundColor: Cores.azul1,
            fontWeight: '600'
        },
        '& tbody td': {
            fontWeight: '300'
        },
        '& tbody tr:hover': {
            backgroundColor: Cores.azul0,
            cursor: 'pointer'
        }
    }
})

export default function UseTable(records, headCells, filterFn) {

    const classes = useStyles()

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === 'asc'
            setOrder(isAsc ? 'desc' : 'asc')
            setOrderBy(cellId)
        }

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id}
                                sortDirection={orderBy === headCell.id ? order : false}>
                                    {headCell.disableSorting?headCell.label:
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value))
        setPage(0)
    }

    const labelDisplayedRows = ({ from, to, count }) => { 
        return `${from}–${to} de ${count !== -1 ? count : `mais que ${to}`}`;
    }

    const TblPagination = () => (
        <TablePagination
            component='div'
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={records.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={labelDisplayedRows}
            labelRowsPerPage='Itens por página'
        />)

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index])
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if (order !== 0) return order
            return a[1] = b[1]
        })

        return stabilizedThis.map((el) => el[0])
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy)
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1
        }
        if (b[orderBy] > a[orderBy]) {
            return 1
        }
        return 0

    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}