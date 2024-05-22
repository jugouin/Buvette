import React, {useState} from 'react';
import PropTypes from 'prop-types';
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
import "./tableReservation.css";

function createData(date, nbResa, nbMenu) {
  return {
    date,
    nbResa,
    nbMenu,
    reservations: [
      {
        firstName: 'Marie',
        lastName: 'Chatelet',
        phone: +33782672308,
        adults: 4,
        children: 2,
        menu: 6,
      },
      {
        firstName: 'Alain',
        lastName: 'Dupont',
        phone: +33782672308,
        adults: 4,
        children: 2,
        menu: 6,
      },
      {
        firstName: 'Alain',
        lastName: 'Dupont',
        phone: +33782672308,
        adults: 4,
        children: 2,
        menu: 6,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

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
          {row.date}
        </TableCell>
        <TableCell align="right">{row.nbResa}</TableCell>
        <TableCell align="right">{row.nbMenu}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Réservation du {row.date}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                    <TableRow>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Téléphone</TableCell>
                        <TableCell align="right">Adulte(s)</TableCell>
                        <TableCell align="right">Enfant(s)</TableCell>
                        <TableCell align="right">Menu(s)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {row.reservations.map((reservation) => (
                    <TableRow key={reservation.date}>
                      <TableCell component="th" scope="row">
                        {reservation.firstName}
                        </TableCell>
                        <TableCell>{reservation.lastName}</TableCell>
                        <TableCell>{reservation.phone}</TableCell>
                        <TableCell align="right">{reservation.adults}</TableCell>
                        <TableCell align="right">{reservation.children}</TableCell>
                        <TableCell align="right">{reservation.menu}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    nbResa: PropTypes.number.isRequired,
    nbMenu: PropTypes.number.isRequired,
    reservation: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        adults: PropTypes.number.isRequired,
        children: PropTypes.number.isRequired,
        menu: PropTypes.number.isRequired,
      }),
    ).isRequired,
    date: PropTypes.string.isRequired,
    nbResa: PropTypes.number.isRequired,
    nbMenu: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('2020-01-05', 15, 10),
  createData('2020-01-05', 15, 10),
  createData('2020-01-05', 15, 10),
  createData('2020-07-05', 15, 10),
  createData('2023-01-05', 15, 10),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date de Réservation</TableCell>
            <TableCell align="right">Réservations</TableCell>
            <TableCell align="right">Nombre de Menu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
