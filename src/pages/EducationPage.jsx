import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import data from '../data.json';

const EducationPage = () => {
  const educationHistory = data.education;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Education & Certifications
        </Typography>
        <Paper elevation={3} sx={{ mt: 2 }}>
          <List>
            {educationHistory.map((edu, index) => (
              <React.Fragment key={edu.institution + index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={<Typography variant="h6">{edu.institution}</Typography>}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          {edu.degree}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          {edu.duration}
                        </Typography>
                        {edu.details && (
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1}}>
                            {edu.details}
                          </Typography>
                        )}
                      </>
                    }
                  />
                </ListItem>
                {index < educationHistory.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default EducationPage;
