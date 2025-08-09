import React from "react";
import arrowIcon from "./images/icon-arrow.svg";

const Inputs = ({ input, setInput, fetchItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchItems(input.trim());
  };
  return (
    <div className="flex justify-center mt-6">
      <form onSubmit={(e) => e.preventDefault()} className="w-4/5 sm:w-1/2">
        <div className="flex">
          <input
            type="text"
            className="hidden sm:block w-full rounded-l-xl px-4 py-2 outline-none"
            placeholder="Search for IP or domain"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            className="block sm:hidden w-full rounded-l-xl px-4 py-2 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black px-4 rounded-r-xl flex items-center justify-center "
            onClick={handleSubmit}
          >
            <img src={arrowIcon} alt="arrow" className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
