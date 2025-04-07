import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import TB from "./trackbar";
import RT from "./renderTracker";

const Track = ({ userdata, update }) => {
  let x = 0;
  useEffect(() => {
    console.log(userdata);
  }, [userdata]);

  return (
    <div class="min-h-screen bg-mainblue">
      <TB />
      {userdata.map((user, index) => (
        <RT
          key={index}
          name={user[0]}
          total={user[2]}
          paid={user[4]}
          index={index}
          update={update}
        />
      ))}
    </div>
  );
};

export default Track;
