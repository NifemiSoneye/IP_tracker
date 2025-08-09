import React from "react";
import Inputs from "./Inputs";
const Header = ({ input, setInput, fetchItems }) => {
  return (
    <div className="bg-mobile-pattern bg-no-repeat w-screen h-[20rem] sm:h-64 sm:bg-desktop-pattern bg-cover">
      <h2 className="text-white text-center pt-5 text-2xl font-bold">
        IP Address Tracker
      </h2>
      <Inputs input={input} setInput={setInput} fetchItems={fetchItems} />
    </div>
  );
};

export default Header;
