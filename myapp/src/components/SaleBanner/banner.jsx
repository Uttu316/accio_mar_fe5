import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [y, setY] = useState(0);

  const ref = useRef();

  useEffect(() => {
    //stetup fn
    console.log("Banner is Mounted");

    return () => {
      //cleanup fn
      console.log("Banner is Unmounting");
    };
  }, []);

  useEffect(() => {
    let colors = ["red", "green", "blue"];

    let random = parseInt((Math.random() * 10) % colors.length);
    ref.current.style.color = colors[random];

    return () => {
      console.log("Cleanup of y", y);
    };
  }, [y, ref]);
  console.log("Banner invoked");
  return (
    <div>
      <h3 ref={ref}>Sale is Live {y}</h3>
      <button onClick={() => setY(y + 2)}>Update the count</button>
    </div>
  );
};
export default Banner;
