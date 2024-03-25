import React, { useEffect, useState } from "react";
import image1 from "./icons/1.jpg";
import image2 from "./icons/2.jpg";
import image3 from "./icons/3.jpg";
import image4 from "./icons/4.jpg";
import image5 from "./icons/5.jpg";
import image6 from "./icons/6.jpg";
import image7 from "./icons/7.jpg";
import image8 from "./icons/8.jpg";
import image9 from "./icons/9.jpg";
import image10 from "./icons/10.jpg";
import Topbar from "./Topbar";

function Infinitescroll() {
  let [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loadpage, setLoadpage] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      setLoadpage(loadpage + 1);
    }
  };
  useEffect(() => {
    function adddata() {
      let list = [];
      for (let i = 1; i < 11; i++) {
        setCount(count++);
        if (i == 1) {
          list.push({ values: count, image: image1 });
        } else if (i == 2) {
          list.push({ values: count, image: image2 });
        } else if (i == 3) {
          list.push({ values: count, image: image3 });
        } else if (i == 4) {
          list.push({ values: count, image: image4 });
        } else if (i == 5) {
          list.push({ values: count, image: image5 });
        } else if (i == 6) {
          list.push({ values: count, image: image6 });
        } else if (i == 7) {
          list.push({ values: count, image: image7 });
        } else if (i == 8) {
          list.push({ values: count, image: image8 });
        } else if (i == 9) {
          list.push({ values: count, image: image9 });
        } else if (i == 10) {
          list.push({ values: count, image: image10 });
        }
      }
      setData([...data, ...list]);
    }
    adddata();
  }, [loadpage]);
  return (
    <>
      <Topbar />
      <div className="scrollable-element" onScroll={handleScroll}>
        {data.map((val) => (
          <div className="scroll-p">
            <p className="scroll-values">{val.values}</p>
            <img className="scroll-img" src={val.image} title="al" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Infinitescroll;
