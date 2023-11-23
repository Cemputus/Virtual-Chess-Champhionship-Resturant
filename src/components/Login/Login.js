import { useState } from 'react';
import backgroundImage from '../../Images/bg-sign-in-basic.jpeg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Appbar from './../FrontPage/Appbar/Appbar';
import { Card } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
        problem solving
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();
// login

function Login() {


  const login = async (credentials,access) => {
    try {
      const response = await axios.post('https://aquamarine-turkey-tam.cyclic.app/api/login',credentials);
      // console.log(response.data.status);
      const data1 = response.data.data[0]
      
      if (JSON.stringify(response.data.status) === 'true'){
        if (Array.isArray(response.data.data) && response.data.data.length > 0){
        localStorage.setItem('userData', JSON.stringify(data1));
        localStorage.setItem('access', JSON.stringify(access))
        navigate('/landing')
        // console.log(response.data.data[0])
        }
        else{
          alert("Please Enter the correct Credentials")
        }
        
      }
      else{
        alert("Please make sure you have an active internet connection")
      }
      
    } catch(error){
      // console.error(error)
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const credentials = {
    accessnumber: data.get('accessnumber'), 
    password: data.get('password'),
  };
  const access = {
    AccessNumber: data.get('accessnumber'), 
  };
  if (!credentials.accessnumber || !credentials.password ) {
    alert('Please fill in all the required fields.');
    return;
  }

  login(credentials,access);
};

  // const UpdateProfile = (event) => {
  // };


  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      flexWrap: "wrap",
      display: "flex",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <Appbar />
      <Card style ={{
         height: 'auto',
         width:'360px',
         marginTop: '80px auto',
         padding: '20px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
      }}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="accessnumber"
                  label="Access Number"
                  name="accessnumber"
                  autoComplete="accessnumber"
                  autoFocus

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/" variant="body2">
                      Go to Home
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Container>
        </ThemeProvider>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Card>

    </div>
  );
}
export default Login;