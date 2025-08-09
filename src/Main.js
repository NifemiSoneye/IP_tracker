import React from "react";
import Header from "./Header";
import Map from "./Map";

const Main = ({ input, setInput, fetchItems, lat, lng }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header input={input} setInput={setInput} fetchItems={fetchItems} />
      <Map className="flex-1" lat={lat} lng={lng} />
    </div>
  );
};

export default Main;
