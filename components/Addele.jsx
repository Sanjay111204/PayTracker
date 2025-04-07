import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useRef, useEffect } from "react";

const Addele = ({ func }) => {
  //const [count, setcount] = useState(0);
  //const formref = useRef(null);

  // function update() {
  //   setcount(count + 1);
  // }
  //const navigate = useNavigate();
  function savedata() {
    const name = document.getElementById("nameInput").value;
    const date = document.getElementById("DateInput").value;
    const Amountstring = document.getElementById("AmountInput").value;
    const Amount = parseInt(Amountstring, 10);
    const purpose = document.getElementById("purposeInput").value;
    const Amountpaidstring = document.getElementById("AmountpaidInput").value;
    const Amountpaid = parseInt(Amountpaidstring, 10);
    const list = [];
    list.push(name);
    list.push(date);
    list.push(Amount);
    list.push(purpose);
    list.push(Amountpaid);
    func(list);
    alert("Information added");
    //document.getElementById("nameInput").value = "";
    //formref.current.reset();
    //setcount(count + 1);
    //navigate(0);
    //console.log(list);
  }
  return (
    <div class="bg-mainblue w-full h-full font-serif ">
      <div class="  pb-5 text-4xl pt-5 pl-155 ">fill and submit</div>
      <div class=" p-10 relative flex">
        <div class="pl-10 font-medium text-2xl pr-10">
          Name of the worker :-{""}
        </div>
        <input
          class=" pl-2 w-3/4 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter text here"
          type="text"
          id="nameInput"
        ></input>
      </div>
      <div class="p-5 relative flex">
        <div class="pl-57  font-medium text-2xl pr-10">Date :-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter text here"
          type="text"
          id="DateInput"
        ></input>
        <div class="pl-23  font-medium text-2xl pr-10">Amount :-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter number here"
          type="number"
          id="AmountInput"
        ></input>
      </div>
      <div class=" p-10 relative flex">
        <div class="pl-43 font-medium text-2xl pr-10">purpose :-{""}</div>
        <textarea
          class=" p-2 w-3/4 text-xl h-40 rounded-xl bg-blue-200 resize-none"
          placeholder="Enter text here"
          id="purposeInput"
        ></textarea>
      </div>
      <div class=" p-10 relative flex">
        <div class="pl-32 font-medium text-2xl pr-10">Amount paid:-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter number here"
          type="number"
          id="AmountpaidInput"
        ></input>
      </div>
      <div class="p-10 pb-15 pl-178">
        <button
          class="bg-navblue hover:bg-blue-700 text-white font-bold py-4 px-9 rounded"
          onClick={savedata}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Addele;
