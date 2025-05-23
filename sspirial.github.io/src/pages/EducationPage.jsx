import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

const EducationPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Education & Certifications
        </Typography>
        <Paper elevation={3} sx={{ mt: 2 }}>
          <Typography variant="h6" component="h2">
            Education
          </Typography>
          <p>School, college, university attended.</p>
          <p>Courses or certifications.</p>
        </Paper>
      </Box>
    </Container>
  );
};

export default EducationPage;
