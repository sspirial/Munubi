import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import data from '../data.json';

const SkillsPage = () => {
  const { technical, soft } = data.skills;

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ my: 4, width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Skills
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Technical Skills
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 3, justifyContent: 'center' }}>
            {technical.map((skill) => (
              <Chip label={skill} key={skill} color="primary" sx={{ mb: 1 }} />
            ))}
          </Stack>

          <Typography variant="h6" component="h2" gutterBottom align="center">
            Soft Skills
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {soft.map((skill) => (
              <Chip label={skill} key={skill} color="secondary" sx={{ mb: 1 }} />
            ))}
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};

export default SkillsPage;
