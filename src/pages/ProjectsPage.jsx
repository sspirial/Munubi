import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../data.json';

const ProjectsPage = () => {
  const projects = data.projects;

  return (
    <Container maxWidth="lg"> {/* Using lg for potentially more content */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.name} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image || 'https://via.placeholder.com/300x140.png?text=Project+Image'} // Placeholder if no image
                  alt={project.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary" gutterBottom sx={{mt:1}}>
                    Technologies Used:
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {project.technologies.map((tech) => (
                      <Chip label={tech} key={tech} size="small" sx={{mb: 0.5}} />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  {project.liveLink && (
                    <Button size="small" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Link
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button size="small" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
