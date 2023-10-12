import React from "react";
import { UserContextProvider } from "./contex/UsercontexProvider"; // Adjust the import path as needed
import Login from "./Comonents/login";
import Profile from "./Comonents/profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    
  );
}

export default App;
