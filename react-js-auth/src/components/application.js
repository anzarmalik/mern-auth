import React from 'react';
import { Container, Typography } from '@mui/material';

function Application() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the application.
      </Typography>
    </Container>
  );
}

export default Application;
