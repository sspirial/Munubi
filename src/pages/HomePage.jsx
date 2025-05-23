import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import data from '../data.json';

const HomePage = () => {
  const { name, tagline, professionalPhoto, ctaViewWork, ctaDownloadResume, resumeUrl } = data.home;

  return (
    <Container maxWidth="lg" sx={{ width: '100%', padding: '2rem', boxSizing: 'border-box' }}>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Avatar
          alt={name}
          src={professionalPhoto} // Make sure this path is correct e.g. /assets/professional-photo.jpg if in public/assets
          sx={{ width: 150, height: 150, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {tagline}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" component={RouterLink} to="/projects" sx={{ mr: 2 }}>
            {ctaViewWork}
          </Button>
          <Button variant="outlined" href={resumeUrl} download>
            {ctaDownloadResume}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
