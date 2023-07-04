import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");
  //   firestore(データベース)にmessage（入力されたデータ）を送る
  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }
  return (
    <div>
      {/* onSubmit()はformに入力してenterキーを押したらonSubmitの中の関数が呼ばれる */}
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          {/* material uiを使ったインプット */}
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}></SendIcon>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
