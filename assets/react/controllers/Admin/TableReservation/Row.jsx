import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { format } from 'date-fns';

function Row({ reservation, date, persons, menu, onDelete, onDownload }) {
  const [open, setOpen] = React.useState(false);
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
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">
                      <Button onClick={() => onDownload(date)} variant="outlined" sx={{color: 'black'}}>
                          Télécharger
                        </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reservation.map((resa) => (
                    <TableRow key={resa.id}>
                      <TableCell component="th" scope="row">{resa.firstName}</TableCell>
                      <TableCell>{resa.lastName}</TableCell>
                      <TableCell>{resa.phone}</TableCell>
                      <TableCell align="right">{resa.adults}</TableCell>
                      <TableCell align="right">{resa.children}</TableCell>
                      <TableCell align="right">{resa.menu}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => onDelete(resa.id)} variant="outlined" sx={{color: '#01164d'}}>
                          Supprimer
                        </Button>
                      </TableCell>
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

export default Row;
