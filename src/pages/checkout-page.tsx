
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h4">Thank you for your order!</Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Your order is being processed.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default CheckoutPage;
