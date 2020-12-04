import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import RequestLogin from "./RequestLogin";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { requestLogin } from "../Services/RequestLogin";
import { Context } from "../Components/State/Store";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory(); //permet la redirection directe ? en gardant en mémoire l'historic de l'utilisateur ?
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, []);
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await requestLogin({
      username: username,
      password: password,
    });
    window.localStorage.setItem("id", result.data.id);
    dispatch({ type: "LOGIN", payload: { username: result.username } });
    if (result.data.success === true) {
      history.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <input
        onClick={() => {
          requestLogin({ username: "oui", password: "oui" });
          history.push("/");
        }}
      />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          autoFocus
          onChange={handleChangeUsername}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          onChange={handleChangePwd}
        />
        <button onClick={handleSubmit}>Sign In</button>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Login;
