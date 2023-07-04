import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage";

function Line() {
  // setMessages関数を使うとmessagesの中に取得したデータを格納できる
  //   messagesを配列にするためにuseState([])にする。これでmessagesに対してmap使える
  const [messages, setMessages] = useState([]);
  // データベースに格納したmessagesはページをレンダリングしたときに一回だけ呼べばいい。
  useEffect(() => {
    // このmessagesはfirebaseで作ったdatabaseのcollectionの名前(cloud firestore)
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        // setMessage()で取り出したデータを変数messagesに格納していく
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut></SignOut>
      <div className="msgs">
        {/* JSX記法。{}の中はJavaScript,()の中はhtmlを記述できる！ */}
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt=""></img>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage></SendMessage>
    </div>
  );
}

export default Line;
