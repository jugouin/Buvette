import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { format } from 'date-fns';
 

function Row({reservation, date, persons, menu}) {

  const [open, setOpen] = useState(false);
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {formattedDate}
        </TableCell>
        <TableCell align="right">{reservation.length}</TableCell>
        <TableCell align="right">{persons}</TableCell>
        <TableCell align="right">{menu}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Réservation du {formattedDate}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Prénom</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Nom</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Téléphone</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">Adulte(s)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">Enfant(s)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">Menu(s)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {reservation.map(( resa ) => 
                    <TableRow key={resa.id}>
                        <TableCell component="th" scope="row">{resa.firstName}</TableCell>
                        <TableCell>{resa.lastName}</TableCell>
                        <TableCell>{resa.phone}</TableCell>
                        <TableCell align="right">{resa.adults}</TableCell>
                        <TableCell align="right">{resa.children}</TableCell>
                        <TableCell align="right">{resa.menu}</TableCell>
                    </TableRow>
                )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({reservations}) {

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
            {dateReservation.map(({ date, reservation, persons, menu }) => (
            <Row key={date} date={date} reservation={reservation} persons={persons} menu={menu}/>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
