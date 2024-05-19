import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Application from './components/application';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Auth App
          </Typography>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
