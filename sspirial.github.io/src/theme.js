import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#6750A4', // Example Material 3 primary color
    },
    secondary: {
      main: '#958DA5', // Example Material 3 secondary color
    },
    error: {
      main: '#B3261E',
    },
    background: {
      default: '#FFFBFE',
      paper: '#FFFBFE',
    },
    // You can customize typography, shape, and other theme aspects here
    // to align with Material 3 guidelines.
    // For example, using rounded corners for components:
    shape: {
      borderRadius: 16, // Adjust as per Material 3 specs for different components
    },
    typography: {
      fontFamily: 'Roboto, sans-serif', // Default Material Design font
      // You might want to adjust font weights and sizes according to Material 3
    }
  },
  // You can also override component styles here
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Example: Pill-shaped buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Softer, more rounded corners for cards
          // elevation: 0, // Material 3 often prefers less elevation or different shadow styles
          // border: `1px solid #E0E0E0` // Or subtle borders
        }
      }
    }
    // Add other component overrides as needed
  }
});

export default theme;
