import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

const SkillsPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Skills
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <ul>
            <li>Technical Skill 1</li>
            <li>Technical Skill 2</li>
            <li>Soft Skill 1</li>
            <li>Soft Skill 2</li>
            {/* Add more skills */}
          </ul>
        </Paper>
      </Box>
    </Container>
  );
};

export default SkillsPage;
