import React from "react";
import { useEffect } from "react";
const Renderhistory = ({ index, userdata }) => {
  useEffect(() => {
    console.log("enter historyrendering");
    console.log(userdata);
  }, []);
  return (
    <div className="flex text-10xl bg-mainblue font-serif text-xl p-5">
      <div className="ml-5 w-2">{index}</div>
      <div className="ml-17 w-50">{userdata[1]}</div>
      <div className="ml-11 w-55">{userdata[0]}</div>
      <div className="pl-10 w-50">{userdata[2]}</div>
      <div className="pl-30 w-100 ">{userdata[3]}</div>
      <div className="pl-25">{userdata[4]}</div>
    </div>
  );
};

export default Renderhistory;
