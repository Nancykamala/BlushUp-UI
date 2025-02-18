"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme";
import Navbar from "../components/Navbar";
import { CartProvider } from "../components/cart-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(() => createTheme(isClient && prefersDarkMode ? darkTheme : lightTheme), [isClient, prefersDarkMode]);


  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My App</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CartProvider>
            <Navbar />
            {isClient ? children : null} 
          </CartProvider>
          

        </ThemeProvider>
      </body>
    </html>
  );
}
