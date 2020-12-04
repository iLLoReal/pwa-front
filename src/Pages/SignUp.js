import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { requestCreateUser } from "../Services/RequestLogin";
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

function SignUp() {
  const classes = useStyles();
  const history = useHistory(); //permet la redirection directe ? en gardant en mémoire l'historic de l'utilisateur ?
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await requestCreateUser({
      username: username,
      password: password,
      email: email,
    });
    if (result.data.success === true) {
      history.push("/login");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          type="text"
          id="email"
          onChange={handleChangeEmail}
        />
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </Container>
  );
}

export default SignUp;
