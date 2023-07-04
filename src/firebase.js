import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxtDFffl2c7SlqVwqB32tt1sSRb3b_1aQ",
  authDomain: "line-clone-81134.firebaseapp.com",
  projectId: "line-clone-81134",
  storageBucket: "line-clone-81134.appspot.com",
  messagingSenderId: "292267236280",
  appId: "1:292267236280:web:8de0604a1f32805bef4d4d",
});

// firebaseのfirestoreというデータベースを使い、メッセージの内容、日付、ユーザー情報などを保存する
const db = firebaseApp.firestore();
// 認証情報（どのuserがログインしているのか）
const auth = firebase.auth();

// dbとauthをどのコンポーネントでも使えるようにしたい
export { db, auth };
