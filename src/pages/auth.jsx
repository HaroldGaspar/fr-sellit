import React, { useState } from "react";
import { Singin, Singup } from ".";
import { Footer } from "../components";

export default function Auth({ login }) {
  const [user, setUser] = useState({});
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-4 text-center d-block col-12">
            <b className="logo">SELLIT</b>
          </div>
          {login ? (
            <Singin user={user} setUser={setUser} />
          ) : (
            <Singup user={user} setUser={setUser} />
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}
