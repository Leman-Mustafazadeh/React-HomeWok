import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ModalApp = ({ open, handleClose, handleAddSong }) => {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [coverSrc, setCoverSrc] = useState('');

  const handleAdd = () => {
    const newSong = {
      title: title,
      releaseYear: releaseYear,
      coverSrc: coverSrc
    };
    handleAddSong(newSong);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-song-modal-title"
      aria-describedby="add-song-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="add-song-modal-title" variant="h5" component="h2" gutterBottom>
          Add New Song
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Release Year"
          fullWidth
          margin="normal"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <TextField
          label="Cover Image URL"
          fullWidth
          margin="normal"
          value={coverSrc}
          onChange={(e) => setCoverSrc(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>Add Song</Button>
      </Box>
    </Modal>
  );
};

export default ModalApp;
