import React, { Component } from 'react';
import { Button, ButtonGroup, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppNavbar from './AppNavbar';

class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {persons: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('person')
            .then(response => response.json())
            .then(data => this.setState({persons: data}));
    }

    async remove(id) {
        await fetch(`/person/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPersons = [...this.state.persons].filter(i => i.id !== id);
            this.setState({persons: updatedPersons});
        });
    }
    
    render() {
        const {persons, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const personListOriginal = persons.map(person => {
            return <tr key={person.id}>
                <td style={{whiteSpace: 'nowrap'}}>{person.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/person/" + person.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        const personList = persons.map((person) => (
            <TableRow
              key={person.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell>{person.id}</TableCell>
              <TableCell><FontAwesomeIcon icon={ faPenToSquare } style={{ color:"cornflowerblue", cursor:"pointer"}} tag={Link} to={"/person/" + person.id} /></TableCell>
              <TableCell><FontAwesomeIcon icon={faTrashCan} style={{ color:"crimson", cursor:"pointer" }} onClick={() => this.remove(person.id)}/></TableCell>
            </TableRow>
          ));
    
        return <div>
            <AppNavbar/>
            <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
                <h1>Person List</h1>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow >
                    <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} colSpan={3}>ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {personList}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    }
}
export default PersonList;