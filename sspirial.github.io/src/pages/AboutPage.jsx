import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Me
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <p>Short bio introducing yourself.</p>
          <p>Your background (academic or personal).</p>
          <p>Career aspirations.</p>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
