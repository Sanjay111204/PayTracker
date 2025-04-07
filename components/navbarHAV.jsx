import React from "react";
import { NavLink } from "react-router";

const navbar = () => {
  return (
    <div class="flex p-4 bg-navblue">
      <div to="/" class="font-logo text-3xl px-6 cursor-pointer ">
        PayTracker📃
      </div>
      <div>
        <ul class="font-serif flex gap-20 text-lg pl-160  pt-1 cursor-pointer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Add">Add</NavLink>
          <NavLink to="/Track">Track</NavLink>
          <NavLink to="/history">History</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
