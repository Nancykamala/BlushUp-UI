

import { useState, FormEvent } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";

const SignUp = () => {
  
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    
    console.log("User signed up with:", { username, email, password });
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
