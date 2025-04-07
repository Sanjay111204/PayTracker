import React from "react";
import Historybar from "./Historybar";
import Renderhistory from "./Renderhistory";
import { useEffect } from "react";

const Historycomp = ({ historydata }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Historybar />
      {historydata.map((user, index) => (
        <Renderhistory key={index} userdata={user} index={index + 1} />
      ))}
    </div>
  );
};

export default Historycomp;
