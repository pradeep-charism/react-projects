import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const TableHeaderComponent = () => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>Stock Name</StyledTableCell>
                    <StyledTableCell>Stock Description</StyledTableCell>
                </TableRow>
        </TableHead>

    )
}


const TableBodyComponent = props => {
    return (<TableBody>
        {
            props.joinList.map((nestedItem, i) => (
                nestedItem.map(data => (
                    <TableRow key={data.id}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.country}</TableCell>
                        <TableCell>{data.stockName}</TableCell>
                        <TableCell>{data.description}</TableCell>
                    </TableRow>
                ))
            ))}
    </TableBody>);
}

class TableComponent extends React.Component {
    render() {
        const { joinList } = this.props

        return (
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeaderComponent />
                    <TableBodyComponent joinList={joinList} />
                </Table>
            </TableContainer>
        )
    }
}

export default TableComponent;