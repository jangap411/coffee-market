import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { logo } from "../../assets";
import Copyright from "../../components/Copyright";
import { axiosInstance } from "../../utils/axiosHeader";
import AlertMessage from "../../components/AlertMessage";
import {
  setAlertMessage,
  setAlertOpen,
  setAlertType,
} from "../../feature/alert/alertSlice";
import { useDispatch } from "react-redux";

const defaultTheme = createTheme();

const SignUp = () => {
  const dispatch = useDispatch();
  //handle alert
  const handleAlertOpen = (type, open, message) => {
    dispatch(setAlertType(type));
    dispatch(setAlertOpen(open));
    dispatch(setAlertMessage(message));
  };

  // state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // reset values.
  const resetState = () => {
    setPassword("");
    setConfirmPassword("");
    setName("");
    setEmail("");
    setUsername("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      return handleAlertOpen(
        "error",
        true,
        "The passwords do not match. \nPlease check the passwords you entered and try again"
      );
    }

    const user = {
      username,
      name,
      password,
      email,
    };
    try {
      const { data } = await axiosInstance.post("/register", user);
      console.log(data);
      handleAlertOpen(
        "success",
        true,
        "Account created successfully. \nPlease login now to continue."
      );
      resetState();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <AlertMessage />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="kofi logo" height={"100px"} />
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="full-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Your username"
                    name="username"
                    autoComplete="family-name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="confirm Password"
                    type="password"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
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
                  <Link
                    href="/signin"
                    variant="body2"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
