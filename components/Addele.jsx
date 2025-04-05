import React from "react";

const Addele = () => {
  return (
    <div class="bg-mainblue w-full h-full font-serif ">
      <div class="  pb-5 text-4xl pt-5 pl-155 ">fill and submit</div>
      <card class=" p-10 relative flex">
        <div class="pl-10 font-medium text-2xl pr-10">
          Name of the worker :-{""}
        </div>
        <input
          class=" pl-2 w-3/4 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter text here"
          type="text"
        ></input>
      </card>
      <card class="p-5 relative flex">
        <div class="pl-57  font-medium text-2xl pr-10">Date :-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter text here"
          type="text"
        ></input>
        <div class="pl-23  font-medium text-2xl pr-10">Amount :-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter number here"
          type="number"
        ></input>
      </card>
      <card class=" p-10 relative flex">
        <div class="pl-43 font-medium text-2xl pr-10">purpose :-{""}</div>
        <textarea
          class=" p-2 w-3/4 text-xl h-40 rounded-xl bg-blue-200 resize-none"
          placeholder="Enter text here"
        ></textarea>
      </card>
      <card class=" p-10 relative flex">
        <div class="pl-32 font-medium text-2xl pr-10">Amount paid:-{""}</div>
        <input
          class=" pl-2 w-100 text-xl h-10 rounded-xl bg-blue-200"
          placeholder="Enter number here"
          type="number"
        ></input>
      </card>
      <div class="p-10 pb-15 pl-178">
        <button class="bg-navblue hover:bg-blue-700 text-white font-bold py-4 px-9 rounded">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Addele;
