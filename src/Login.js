import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Login.css";
import { actionTypes } from "./reducer";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    //sign in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/19/04/31/logo-2418158_960_720.png"
          alt="Gbook"
        />
        <h3>Gbook</h3>
      </div>
      <Button type="submit" onClick={signIn}>
        SignIn
      </Button>
    </div>
  );
}

export default Login;
