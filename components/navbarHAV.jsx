import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
const navbar = () => {
  return (
    <div class="flex p-4 bg-navblue">
      <h1 to="/" class="font-logo text-3xl px-6 cursor-pointer ">
        PayTracker📃
      </h1>
      <div>
        <ul class="font-serif flex gap-30 text-lg pl-170  pt-1 cursor-pointer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Add">Add</NavLink>
          <NavLink to="/Track">Track</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
