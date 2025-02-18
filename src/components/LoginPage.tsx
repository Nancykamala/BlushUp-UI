import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
`;

const LoginCard = styled('div')`
  background: ${(props) => props.theme.palette.background.paper};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title variant="h5">Login to Your Account</Title>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
