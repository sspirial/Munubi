import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        {navItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            component={RouterLink}
            to={item.path}
            sx={{ margin: '0 8px' }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
