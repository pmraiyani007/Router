import React, { useEffect, useState } from "react";

function Gitfolow() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/pmraiyani007")
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);
  return (
    <>
      <div className=" bg-slate-600">
        <div className="text-center">Github followers: {data.following}</div>;
        <div className="flex justify-center bg-slate-600">
          <img src={data.avatar_url} />
        </div>
      </div>
      
    </>
  );
}

export default Gitfolow;
