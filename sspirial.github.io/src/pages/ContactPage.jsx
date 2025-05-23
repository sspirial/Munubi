import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <p>Email: your.email@example.com</p>
            <p>Phone: (Optional)</p>
            <p>Location: (Optional)</p>
            {/* Add social media links */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;
