import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'; // Optional: for a card-like background
import data from '../data.json';

const AboutPage = () => {
  const { bio, background, aspirations } = data.about;

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ my: 4, width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Me
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Bio
          </Typography>
          <Typography paragraph align="center">
            {bio}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }} align="center">
            Background
          </Typography>
          <Typography paragraph align="center">
            {background}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }} align="center">
            Career Aspirations
          </Typography>
          <Typography paragraph align="center">
            {aspirations}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
