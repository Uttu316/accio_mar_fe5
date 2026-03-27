import { useState } from "react";
import Banner from "./banner";

const SaleBanner = () => {
  const [isBanner, setIsBanner] = useState(false);
  return (
    <div>
      <h3>Sale Banner</h3>
      {!isBanner && (
        <button onClick={() => setIsBanner(true)}>Show Banner</button>
      )}
      {isBanner && (
        <button onClick={() => setIsBanner(false)}>Hide Banner</button>
      )}
      {isBanner && <Banner />}
    </div>
  );
};
export default SaleBanner;
