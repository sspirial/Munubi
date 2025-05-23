import { alpha, createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A148C', // Darker Purple
      light: '#7C43BD', // Lighter shade for hover or accents
      dark: '#311B92', // Even darker for specific uses
    },
    secondary: {
      main: '#FFD700', // Yellow accent
      light: '#FFFF52', // Lighter yellow for hover
      dark: '#C7A500',  // Darker yellow for specific states if needed
    },
    error: {
      main: '#FF6E6E', // A slightly brighter red for dark mode errors
    },
    background: {
      default: '#201A2E', // Deep dark indigo/purple
      paper: '#2C253E',   // Slightly lighter surface color
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#A0A0C0', // Adjusted for new background
    },
    // You can customize typography, shape, and other theme aspects here
    // to align with Material 3 guidelines.
    // For example, using rounded corners for components:
    shape: {
      borderRadius: 16, // Adjust as per Material 3 specs for different components
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      allVariants: {
        color: '#F0F0F0', // Base text color updated
      },
      h1: { fontWeight: 700, fontSize: '2.5rem' },
      h2: { fontWeight: 700, fontSize: '2rem' },
      h3: { fontWeight: 600, fontSize: '1.75rem' },
      // Add more specific typography if needed
    },
    spacing: 8, // Default spacing unit
  },
  // You can also override component styles here
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Pill-shaped buttons
          textTransform: 'none', // More modern feel
          fontWeight: 'bold',
          padding: '8px 22px',
          transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          color: '#FFFFFF',
          backgroundColor: '#4A148C',
          boxShadow: `0 2px 8px 0 ${alpha('#4A148C', 0.4)}`,
          '&:hover': {
            backgroundColor: '#5E1F9E', // Slightly lighter purple on hover
            boxShadow: `0 4px 15px 0 ${alpha('#4A148C', 0.6)}`,
          },
        },
        containedSecondary: {
          color: '#000000', // Black text on yellow accent
          backgroundColor: '#FFD700',
          boxShadow: `0 2px 8px 0 ${alpha('#C7A500', 0.4)}`,
          '&:hover': {
            backgroundColor: '#FFEB3B', // Lighter yellow on hover
            boxShadow: `0 4px 15px 0 ${alpha('#C7A500', 0.6)}`,
          },
        },
        outlinedPrimary: {
          color: '#7C43BD',
          borderColor: alpha('#7C43BD', 0.5),
          '&:hover': {
            borderColor: '#7C43BD',
            backgroundColor: alpha('#7C43BD', 0.15),
            boxShadow: `0 0 10px 0 ${alpha('#7C43BD', 0.3)}`, // Glow effect
          },
        },
        outlinedSecondary: {
          color: '#FFD700',
          borderColor: alpha('#FFD700', 0.7),
          '&:hover': {
            borderColor: '#FFD700',
            backgroundColor: alpha('#FFD700', 0.20),
            boxShadow: `0 0 10px 0 ${alpha('#FFD700', 0.4)}`, // Glow effect
          },
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#311B92', // Dark purple for AppBar
          boxShadow: `0 2px 10px 0 ${alpha('#000000', 0.3)}`, // Subtle shadow for depth
          position: 'sticky', // Make AppBar sticky
          top: 0, // Stick to the top
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above other content
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: '#2C253E', // Use paper color
          border: `1px solid ${alpha('#FFFFFF', 0.08)}`, // More subtle border
          boxShadow: `0 6px 18px 0 ${alpha('#000000', 0.25)}`, // Softer, more pronounced shadow
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 25px 0 ${alpha('#000000', 0.35)}`,
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: palette.background.paper is applied by default
        },
        elevation1: {
          boxShadow: `0 1px 3px ${alpha('#000000', 0.2)}, 0 1px 2px ${alpha('#000000', 0.24)}`,
        },
        elevation2: {
          boxShadow: `0 3px 6px ${alpha('#000000', 0.23)}, 0 3px 6px ${alpha('#000000', 0.26)}`,
        },
        elevation3: {
          boxShadow: `0 4px 12px 0 ${alpha('#000000', 0.3)}`,
        },
        // Add more elevation styles if needed, Material 3 has specific values
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({
          theme
        }) => ({
          color: theme.palette.secondary.main, // Yellow for links
          textDecorationColor: alpha(theme.palette.secondary.main, 0.5),
          fontWeight: 'bold',
          transition: 'color 0.15s ease-in-out, text-decoration-color 0.15s ease-in-out',
          '&:hover': {
            textDecorationColor: theme.palette.secondary.light,
            color: theme.palette.secondary.light,
          },
        }),
      },
    }
    // Add other component overrides as needed
  }
});

export default theme;
