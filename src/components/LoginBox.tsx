import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);

export default function LoginBox() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleChange = (event:any) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    /*
    const method = "POST";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const payload = {
      email: email,
      password: password
    };
    const body = JSON.stringify(payload);
    
    fetch("http://localhost:5000/api/login/", {method, headers, body})
      .then((res) => {
        console.log(res.json());
        const obj = JSON.parse(json);
        if (obj.auth_result != 0){
          return alert("メールアドレスかパスワードが間違っています。")
        }
        localStorage.setItem('session_id', obj.session_id);
      })
      .then(console.log).catch(console.error);
    */
   const obj = {'auth_result': 0, 'session_id': '0faa025f'};
   console.log(obj.session_id);
   localStorage.setItem('session_id', obj.session_id);
   console.log(localStorage.getItem('session_id'));
   document.location.href = "http://localhost:3000/";
  };

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs></Grid>
      <Grid item xs><br></br><br></br><br></br></Grid>
      <Grid item xs></Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs></Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
        <form 
          className={classes.root} 
          noValidate 
          autoComplete="off"
          onSubmit={handleSubmit}
        >
              <p>Login</p>
              <TextField
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Eメールアドレス"
                style={{ margin: 8 }}
                placeholder="メールアドレス"
                helperText="ご登録のアドレスを記入してください"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="パスワード"
                type="password"
                style={{ margin: 8 }}
                placeholder="パスワード"
                helperText="ご登録のパスワードを登録してください"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button type="submit" variant="contained" size="large" color="primary" className={classes.submit}>
                SIGN IN
              </Button>
            </form>
        </Paper>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs></Grid>
      <Grid item xs></Grid>
      <Grid item xs></Grid>
    </Grid>
  </div>
  );
}