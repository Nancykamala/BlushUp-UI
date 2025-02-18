import { createTheme, PaletteMode } from '@mui/material/styles';

const lightTheme: { palette: { mode: PaletteMode; background: { default: string }; text: { primary: string } } } = {
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#171717',
    },
  },
};

const darkTheme: { palette: { mode: PaletteMode; background: { default: string }; text: { primary: string } } } = {
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
    },
    text: {
      primary: '#ededed',
    },
  },
};

const theme = createTheme({
  palette: {
    ...lightTheme.palette, 
  },
});

export { lightTheme, darkTheme, theme };
