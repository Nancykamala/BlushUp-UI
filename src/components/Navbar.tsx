import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BlushUp
        </Typography>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
