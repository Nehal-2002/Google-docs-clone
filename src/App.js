import "./app.css";
import React, { useState } from "react";
import LoginBtn from "./Components/LoginBtn/loginBtn";
import { loginWithGoogle, useAuthCheck } from "./API/Auth";
import Document from "./Components/Document/document";

function App() {
  let {isAuth,userPhotoURL} = useAuthCheck();
  function handleClick() {
    loginWithGoogle();
  }
  return (
    <div>
      {!isAuth ? (
        <LoginBtn handleLogin={handleClick}></LoginBtn>
      ) : (
        <Document photoURL={userPhotoURL} />
      )}
    </div>
  );
}

export default App;
