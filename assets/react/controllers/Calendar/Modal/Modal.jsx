import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import "./Modal.css";

const btn_style = {
  color: 'rgb(1, 22, 77)',
  border: '2px solid rgb(1, 22, 77)',
  padding:'0',
}

export default function BasicModal({evening, onDateSelect}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dateCalendar = format(new Date(evening.date), 'dd');
  const date = format(new Date(evening.date), 'EEEE dd MMMM', { locale: fr });

  const handleDateSelect = () => {
    onDateSelect(date);
    handleClose();
  };

  return (
    <div>
      <Button sx={{ minWidth: 'inherit', padding: 'inherit' }} onClick={handleOpen}>{dateCalendar}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal_box" onClick={handleClose}>
          {evening.cancelled ? (
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }} color="error">Soirée annulée</Typography>
          ) : (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" className="modal_title">{date}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>Menu proposé: {evening.menu}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>Musique: {evening.music}</Typography>
            <Button sx={btn_style} onClick={handleDateSelect}>Sélectionnez</Button>
          </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
