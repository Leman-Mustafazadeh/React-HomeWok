import { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import ModalApp from './components/Modal.jsx/index.jsx';
import CustomAppBar from './components/CustomApp.jsx';
import ArtistList from './components/ArtistList.jsx';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);



  const handleAddSong = (newSong) => {
    axios.patch(`http://localhost:3000/artist/:artistId`, { songs: [...selectedArtist.songs, newSong] })
      .then(response => {
        console.log( response.data);
        setOpenModal(false);
      })
      .catch(error => {
        console.error( error);
      });
  };
  
  const handleDeleteSong = (songId) => {
    axios.patch(`http://localhost:3000/artist/${selectedArtist.id}`, {
      songs: selectedArtist.songs.filter(song => song.id !== songId)
    })
    .then(response => {
      console.log( response.data);
      setSelectedArtist(null);
    })
    .catch(error => {
      console.error( error);
    });
  };

  return (
    <div>
      <CustomAppBar/>
      <ArtistList onSelectArtist={setSelectedArtist} />
      <ModalApp
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleAddSong={handleAddSong}
      />
      {selectedArtist && (
        <Modal
          open={Boolean(selectedArtist)}
          onClose={() => setSelectedArtist(null)}
          aria-labelledby="artist-song-modal-title"
          aria-describedby="artist-song-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <h2 id="artist-song-modal-title">{selectedArtist.name} Songs</h2>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Cover</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Release Year</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedArtist.songs.map(song => (
                    <TableRow key={song.id}>
                      <TableCell><img src={song.coverSrc} alt="Cover" style={{ width: '50px' }} /></TableCell>
                      <TableCell>{song.title}</TableCell>
                      <TableCell>{song.releaseYear}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleDeleteSong(song.id)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default App;
