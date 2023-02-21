import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({arrayInput}) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
      <h1>Person Database</h1>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }} colSpan={3}>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrayInput.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell><FontAwesomeIcon icon={ faPenToSquare } /></TableCell>
              <TableCell><FontAwesomeIcon icon={faTrashCan} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}