import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import BackgroundImage from "../../public/images/backgroundimage.png";

const ForgetPassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Password reset link sent to:", email);
    
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
              Reset Your <span style={{ color: "hotpink" }}>BlushUp</span> Password
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 20 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                sx: {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 2,
                  color: "black",
                },
              }}
              InputLabelProps={{ sx: { color: "hotpink" } }}
            />

            <Button
              href="/reset-password"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 2,
                backgroundColor: "black",
                color: "hotpink",
                "&:hover": { backgroundColor: "hotpink", color: "black" },
              }}
            >
              Send Reset Link
            </Button>
          </form>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2" sx={{ color: "black" }}>
              Remembered your password?
            </Typography>
            <Button href="/login" variant="text" sx={{ color: "hotpink" }}>
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ForgetPassword;
