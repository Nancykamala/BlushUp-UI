import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Blush Up",
  description: "Discover amazing beauty products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
