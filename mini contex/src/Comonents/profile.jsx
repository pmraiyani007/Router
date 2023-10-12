import React, { useContext } from "react";
import UserContext from "../contex/UsercontexProvider";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-xl text-center">Please login</div>;
  return <div className="text-xl text-center">welcome {user.username}</div>;
}

export default Profile;
