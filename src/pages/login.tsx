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

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
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
              <span style={{ color: "hotpink" }}>BlushUp</span>
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 20 }}>
            <TextField
              label="Email"
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
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Login
            </Button>
          </form>

          <Box textAlign="center" mt={2}>
            <Button variant="text" sx={{ color: "black" }} href="/forget-password">
              Forgot Password?
            </Button>
          </Box>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2" sx={{ color: "black" }}>
              Not a user?
            </Typography>
            <Button href="/sign-up" variant="text" sx={{ color: "hotpink" }}>
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
