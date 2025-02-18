import React, { useState } from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    
    router.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
        
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        
        <Typography variant="h5" gutterBottom>
          Login to BlushUp
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Link href="/forget-password" passHref>
        <Button variant="text">Forget Password?</Button>
        </Link>
      </Box>
      <Typography sx={{ml:20}}>Not a User?</Typography>
      <Link href="/sign-up" passHref>
        <Button sx={{ml:20}}>Sign Up</Button>
        </Link>
    </Container>
  );
};

export default LoginPage;
