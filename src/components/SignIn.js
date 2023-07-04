import { Button } from "@mui/material";
// 謎？
import firebase from "firebase/compat/app";
import React from "react";
import { auth } from "../firebase.js";

function SignIn() {
  function signInWithGoogle() {
    // firebaseが用意してるgoogleに簡単にログインできる関数
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebaseが用意してるgoogleにログインする機能をpopupしてログインできるようになる
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  );
}

export default SignIn;
