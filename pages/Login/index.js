import * as React from "react";
import { Context } from "../../context/UserContext";
import { usePostRequest } from "../../hooks/request";
import { login } from "../../utils/urls";
import { Wrapper } from "../../components/Styles/Login/style";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "../../components/MaterialUI";

const theme = createTheme();

const Login = () => {
  const { setUser } = React.useContext(Context);
  const postRequest = usePostRequest({ url: login });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const getData = new FormData(event.currentTarget);
    const { response } = await postRequest.request({
      data: {
        email: getData.get("email"),
        name: getData.get("username"),
        password: getData.get("password"),
      },
    });
    const { code, error, accessToken, refreshToken, id } = response;
    if (
      code === 400 ||
      (code === 400 && error === "USER_NOT_FOUND") ||
      (code === 400 && error === "WRONG_PASSWORD")
    ) {
      alert("Login yoki parol xato");
      setUser(false);
    } else {
      setUser(true);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("id", id);
      localStorage.setItem("user", true);
    }
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
};

export default Login;
