import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'; // Example, add more as needed
import data from '../data.json';

const socialIconMap = {
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
  Twitter: <TwitterIcon />,
  // Add other social media icons here
};

const ContactPage = () => {
  const { email, phone, location, socialMedia } = data.contact;

  console.log('Contact Data:', { email, phone, location, socialMedia }); // Debugging data

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send to an API or mailto)
    alert('Form submitted (not really, this is a demo)!');
  };

  return (
    <Container maxWidth="lg" sx={{ width: '100%', padding: '2rem', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ my: 4, width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Me
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom align="center">
                Send a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom align="center">
                Contact Information
              </Typography>
              <List>
                {email && (
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Email" secondary={<Link href={`mailto:${email}`}>{email}</Link>} />
                  </ListItem>
                )}
                {phone && (
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Phone" secondary={phone} />
                  </ListItem>
                )}
                {location && (
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Location" secondary={location} />
                  </ListItem>
                )}
              </List>
              {socialMedia && socialMedia.length > 0 && (
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="subtitle1" gutterBottom align="center">
                    Connect with me
                  </Typography>
                  <List>
                    {socialMedia.map((social) => (
                      <ListItem key={social.name} component={Link} href={social.url} target="_blank" rel="noopener noreferrer" sx={{color: 'inherit', textDecoration: 'none'}}>
                        <ListItemIcon>
                          {socialIconMap[social.name] || <Box component="span" sx={{ width: 24, height: 24 }} /> /* Fallback for unmapped icons */}
                        </ListItemIcon>
                        <ListItemText primary={social.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;
