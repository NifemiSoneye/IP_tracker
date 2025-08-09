import { useEffect, useState } from "react";
import Main from "./Main";
import Description from "./Description";

function App() {
  const [input, setInput] = useState("");
  const [addressInfo, setAddressInfo] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const API_KEY = process.env.REACT_APP_GEO_API_KEY;

  const fetchItems = async (query = "") => {
    const isIP = /^(?:\d{1,3}\.){3}\d{1,3}$/.test(query);
    const isDomain = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/.test(query);
    try {
      let response;
      if (isIP) {
        response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
        );
      } else if (isDomain) {
        response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${query}`
        );
      } else if (!query) {
        // No query = user's IP
        response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
        );
      } else {
        console.log("Not found");
      }

      if (!response.ok) {
        throw new Error("Did not receive expected data");
      }
      const data = await response.json();
      setAddressInfo(data);
      setFetchError("");
      setAddressInfo(data);
      console.log(data);
    } catch (err) {
      setFetchError(err.message);
      setAddressInfo(null);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <Description
        className=" "
        ip={addressInfo?.ip}
        city={addressInfo?.location?.city}
        region={addressInfo?.location?.region}
        timezone={addressInfo?.location?.timezone}
        isp={addressInfo?.isp}
      />
      <Main
        input={input}
        setInput={setInput}
        fetchItems={fetchItems}
        setAddressInfo={setAddressInfo}
        addressInfo={addressInfo}
        lat={addressInfo?.location?.lat || 0}
        lng={addressInfo?.location?.lng || 0}
      />
    </div>
  );
}

export default App;
