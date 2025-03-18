import React, { useState } from "react";
import { Button, TextField, Typography, Container, Box, Paper } from "@mui/material";
import { useRouter } from "next/router";
import BackgroundImage from "../../public/images/backgroundimage.png";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("New Password:", newPassword);
    router.push("/login");
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
              label="New Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Reset Password
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResetPassword;
