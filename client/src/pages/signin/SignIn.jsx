import { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Checkbox,
  Link,
  Paper,
  Grid,
  Typography,
  FormControlLabel,
  Box,
} from "@mui/material";

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

const SignIn = () => {
  // dispatch
  const dispatch = useDispatch();

  // state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // data
  const payload = {
    username: username,
    password: password,
  };

  //handle alert
  const handleAlertOpen = (type, open, message) => {
    dispatch(setAlertType(type));
    dispatch(setAlertOpen(open));
    dispatch(setAlertMessage(message));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosInstance.post("/login", payload);

      console.log(data);
      handleAlertOpen("success", true, `Welcome ${username}`);
    } catch (error) {
      handleAlertOpen("error", true, error.message);
      // alert(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <AlertMessage />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://w0.peakpx.com/wallpaper/947/1015/HD-wallpaper-coffee-brown-beans-leave-green-leave-coffee-beans-coffee-bean-leaves-green-green-leaves.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="kofi logo"
                style={{
                  height: 100,
                }}
              />
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
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
                    <Link
                      href="/signup"
                      variant="body2"
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignIn;
