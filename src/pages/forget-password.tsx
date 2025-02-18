
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Email submitted:", email);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Link href="/reset-password" passHref>
        <Button type="submit" variant="contained" color="primary">
          Reset Password
        </Button>
        </Link>
      </form>
    </div>
  );
};

export default ForgetPassword;
