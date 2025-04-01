import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme'; // We'll create this next
import { Box, Button } from "@chakra-ui/react"; // ✅ this is correct




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
