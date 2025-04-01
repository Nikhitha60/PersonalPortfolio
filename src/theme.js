// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',      // You can change this to 'dark'
  useSystemColorMode: false,      // Change to true if you want to auto-switch with OS setting
};

const theme = extendTheme({ config });

export default theme;
