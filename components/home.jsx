import React from "react";
import myimage from "./requirements/mainpage.png";

const home = () => {
  return (
    <div class=" bg-mainblue  flex relative h-full">
      <div class=" p-24 w-7/12 font-serif">
        <div class="  pb-5 text-5xl  ">Welcome to Pay Tracker</div>
        <div class="pt-7  text-2xl ">
          Keep track of your daily payments to workers effortlessly. Our app
          helps you manage and monitor your wage expenses in just two simple
          steps:
        </div>
        <div class="pt-7  text-3xl">Add Section:</div>
        <div class="pt-7  text-2xl ">
          Easily log the amount you pay each worker every day. Just select the
          worker’s name, enter the date and the amount, and you’re done.
        </div>
        <div class="pt-7  text-3xl">Track Section:</div>
        <div class="pt-7 pb-1.75 text-2xl  ">
          Quickly view the total wages paid to each worker. Stay on top of your
          spending and keep your records clear and organized.
        </div>
      </div>
      <div>
        <img src={myimage} alt="Wage Tracker App Illustration" />
      </div>
    </div>
  );
};

export default home;
