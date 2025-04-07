import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const renderTracker = ({ name, total, paid, index, update }) => {
  const [amount, setAmount] = useState("");
  const [newpaid, setnewpaid] = useState(paid);
  useEffect(() => {
    console.log(name);
  }, [newpaid]);

  const changedata = async () => {
    if (!amount) return;
    setnewpaid(newpaid + parseInt(amount, 0));
    await update(index, amount);
    setAmount("");
  };

  return (
    <div class="flex text-10xl bg-mainblue font-serif text-xl p-5">
      <div class="pl=5 w-2">{index + 1}</div>
      <div class="pl-29 w-0">{name}</div>
      <div class="pl-60 w-0">{total}</div>
      <div class="pl-80 w-0">{newpaid}</div>
      <div class="pl-75 w-0 pr-65">{total - newpaid}</div>
      <input
        class="bg-blue-200 rounded-xl w-30 pl-2"
        type="number"
        placeholder="amount"
        id="pay"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button
        class="bg-navblue pt-1 cursor-pointer rounded-xl ml-5 w-10"
        onClick={changedata}
      >
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default renderTracker;
