import * as React from 'react';
import backgroundImage from '../../Images/bg-sign-up-cover.jpeg'
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import Appbar from '../../Components/FrontPage/Appbar/Appbar';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import { Alert } from '@mui/material'

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

export default function SignUp() {
  const addMember = async (member, to_store,access) => {
    try {
      const response = await axios.post('https://aquamarine-turkey-tam.cyclic.app/api/signup',member);
      const response_user = await axios.post("https://aquamarine-turkey-tam.cyclic.app/api/initial",member)
      console.log(response.data);
      if (JSON.stringify(response.data.status) === 'true'){
        localStorage.setItem('userData', JSON.stringify(to_store));
        localStorage.setItem('access', JSON.stringify(access))
        alert(response.data.message)
        navigate('/landing')
      }
      else{
        alert("Please make sure you have an active internet connection")
      }
    } catch(error){
      console.error(error)
    }
  }
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const member = {
      accessnumber: data.get('accessnumber'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      password: data.get('password'),
      phonenumber: data.get('phonenumber'),
    }
    const to_store ={
      FirstName: data.get('firstname'),
      LastName: data.get('lastname'),
    }
    const access = {
      AccessNumber: data.get('accessnumber'),
    }
    if (!member.accessnumber || !member.firstname || !member.lastname || !member.password || !member.phonenumber) {
      alert('Please fill in all the required fields.');
      return;
    }
    addMember(member,to_store,access);
  };
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
        height: '590px',
        width:360,
        marginTop: '80px',
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
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstname"
                      required
                      fullWidth
                      id="firstname"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      name="lastname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="accessnumber"
                      label="Access Number"
                      name="accessnumber"
                      
                    // validateEmail must take in what has been typed in the email field

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="phonenumber"
                      label="phonenumber"
                      type="number"
                      id="phonenumber"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>

                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <br />
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