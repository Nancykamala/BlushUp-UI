import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import logo from "../../public/images/blushup-logo.png"

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Logo and Text Container */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Image src={logo} alt="BlushUp Logo" width={40} height={40} />
          <Typography variant="h6">BlushUp</Typography>
        </Box>

        {/* Cart Icon */}
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
