import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Auth(props) {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      cookies.set("auth-token", response.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="auth">
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
}

export default Auth;
