import React, { useEffect, useState } from "react";
import NB from "../components/navbarHAV";
import HOME from "../components/home";
import Addele from "../components/Addele";
import Track from "../components/Track";
import Historycomp from "../components/Historycomp";
import { createBrowserRouter, RouterProvider } from "react-router";
//import { useEffect } from "react";
// import { useNavigate } from "react-router";

const App = () => {
  const [storeData, setstoreData] = useState([]);
  const [historydata, sethistorydata] = useState([]);
  useEffect(() => {
    console.log("reloaded");
  }, [storeData]);

  // const navigate = useNavigate();

  function update(index, pay) {
    console.log("hi");
    const updated = [...storeData];
    updated[index] = [...updated[index]];
    updated[index][4] += parseInt(pay, 10);
    console.log(updated[index][4]);
    setstoreData(updated);
    // navigate("/track");
  }

  function getdata(data) {
    let b = true;
    for (let i = 0; i < storeData.length; i++) {
      if (data[0] == storeData[i][0]) {
        storeData[i][2] += data[2];
        storeData[i][4] += data[4];
        b = false;
        break;
      }
    }
    if (b) {
      storeData.push(data);
    }
    historydata.push(data);
  }
  function read() {
    console.log(storeData);
  }
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NB />
          <HOME />
        </div>
      ),
    },
    {
      path: "/Home",
      element: (
        <div>
          <NB />
          <HOME />
        </div>
      ),
    },
    {
      path: "/Add",
      element: (
        <div>
          <NB />
          <Addele func={getdata} />
        </div>
      ),
    },
    {
      path: "/track",
      element: (
        <div>
          <NB />
          <Track userdata={storeData} update={update} />
        </div>
      ),
    },
    {
      path: "/history",
      element: (
        <div>
          <NB />
          <Historycomp historydata={historydata} />
        </div>
      ),
    },
  ]);
  return <div>{<RouterProvider router={router} />}</div>;
};

export default App;
