"use client";
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import logo from "../../public/images/blushup-logo.png";
import Link from "next/link";
import { useCart } from "./cart-context"

const Navbar = () => {
  const { cart } = useCart();
  console.log(" Cart in Navbar:", cart); 
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Image src={logo} alt="BlushUp Logo" width={40} height={40} />
          <Typography variant="h6">BlushUp</Typography>
        </Box>

        <div style={{ paddingRight: "10px" }}>
          <SearchIcon />
        </div>
        <div style={{ paddingRight: "10px" }}>
          <FavoriteIcon />
        </div>
        <Link href="/cart" passHref>
          <IconButton color="inherit">
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {cart.length}
              </Box>
            )}
          </IconButton>
        </Link>
        <Link href="/login" passHref>
          <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
