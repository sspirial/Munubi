import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'; // Optional: for a card-like background
import data from '../data.json';

const AboutPage = () => {
  const { bio, background, aspirations } = data.about;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Bio
          </Typography>
          <Typography paragraph>
            {bio}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
            Background
          </Typography>
          <Typography paragraph>
            {background}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
            Career Aspirations
          </Typography>
          <Typography paragraph>
            {aspirations}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
