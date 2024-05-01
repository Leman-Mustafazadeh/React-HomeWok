import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Skeleton, IconButton, TextField, Select, MenuItem } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';
import Swal from 'sweetalert2';
const ArtistList = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/artist')
      .then(response => {
        setArtists(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/artist/${id}`)
          .then(response => {
            setArtists(artists.filter(artist => artist.id !== id));
            Swal.fire(
              'Deleted!',
              'The artist has been deleted.',
              'success'
            );
          })
          .catch(error => {
            console.error('Error deleting artist:', error);
            Swal.fire(
              'Error!',
              'An error occurred while deleting the artist.',
              'error'
            );
          });
      }
    });
  };

  const filteredArtists = artists.filter(artist => {
    return artist.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (sortType === 'asc') {
    filteredArtists.sort((a, b) => (a.name > b.name) ? 1 : -1);
  } else if (sortType === 'desc') {
    filteredArtists.sort((a, b) => (a.name < b.name) ? 1 : -1);
  }

  return (
    <div>
      <div>
        <TextField
          label="Search artist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <MenuItem value="">Sort by name</MenuItem>
          <MenuItem value="asc">A-Z</MenuItem>
          <MenuItem value="desc">Z-A</MenuItem>
        </Select>
      </div>
      <Grid container spacing={3}>
        {loading ? (
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rectangular" height={200} />
            <Skeleton />
            <Skeleton />
          </Grid>
        ) : (
          filteredArtists.map(artist => (
            <Grid item xs={12} sm={6} md={4} key={artist.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{artist.name}</Typography>
                  <Typography variant="body2">Age: {artist.age}</Typography>
                  <Typography variant="body2">Genre: {artist.genre}</Typography>
                  <Typography variant="body2">Songs: {artist.songs.length}</Typography>
                  <IconButton onClick={() => handleDelete(artist.id)}>
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <Add />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ArtistList;
