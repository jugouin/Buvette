import React, { useState } from 'react';
import { Table, TableContainer } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Row from './Row';

function TableReservation({ allReservations }) {
  const [reservations, setReservations] = useState(allReservations);

  const handleDelete = async (id) => {
    await axios.delete(`/reservation/${id}`);
    setReservations(reservations.filter(reservation => reservation.id !== id));
  };

  const handleDownload = async (date) => {
    try {
      const response = await axios.get(`/download/${date}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
  
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reservation.csv');
      document.body.appendChild(link);
      link.click();
  
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier CSV', error);
    }
  };

  const dateReservation = reservations.reduce((acc, reservation) => {
    const date = reservation.date.split('T')[0];
    const existingEntry = acc.find(entry => entry.date === date);
    if (existingEntry) {
      existingEntry.reservation.push(reservation);
      existingEntry.persons += reservation.adults + reservation.children;
      existingEntry.menu += reservation.menu;
    } else {
      acc.push({ date, reservation: [reservation], persons: reservation.adults + reservation.children, menu: reservation.menu });
    }
    return acc;
  }, []);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#01164d4d', height: '75vh', margin: 'auto initial', marginBottom: '20px' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold' }}>Date de Réservation</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Nombre de Réservations</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Nombre de Personnes</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Nombre de Menus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dateReservation.map(({ id, date, reservation, persons, menu }) => (
            <Row key={id} date={date} reservation={reservation} persons={persons} menu={menu} onDelete={handleDelete} onDownload={handleDownload}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableReservation;
