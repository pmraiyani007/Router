import React, { useState, useContext } from "react";
// import UserContext from "../contex/Contex";
import UserContext from "../contex/UsercontexProvider";

function Login() {
  const [username, setusernam] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handelsubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex justify-center mb-5 mt-8">
      <h2 className="text-xl text-center">Log In</h2>
      <input
        className="text-xl text-center "
        type="text"
        placeholder="id"
        value={username}
        onChange={(e) => {
          setusernam(e.target.value);
        }}
      ></input>
      <input
        className="text-xl text-center"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handelsubmit}>Submit </button>
    </div>
  );
}

export default Login;
