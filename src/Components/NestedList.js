import React, { useState } from "react";
import Topbar from "./Topbar";
import ficon from "./icons/folder.png";
import arrow from "./icons/arrow.png";

function NestedList() {
  const [list, setList] = useState([]);
  const [child, setChild] = useState([]);
  const a = [
    {
      name: "aplication",
      list: [
        {
          name: "Facebook",
          mylist: [
            "Desktop",
            "Document",
            "Downloads",
            "Movies",
            "Music",
            "Pictures",
          ],
        },
        {
          name: "Instagram",
          mylist: ["Pictures", "Downloads", "Desktop", "Document", "Music"],
        },
        {
          name: "Twitter",
          mylist: ["Movies", "Music", "Pictures", "Document", "Downloads"],
        },
        { name: "LinkedIn", mylist: ["Desktop", "Document", "Downloads"] },
        { name: "Snapchat", mylist: ["Document", "Downloads", "Movies"] },
        { name: "TikTok", mylist: ["Movies", "Music", "Pictures"] },
      ],
    },
    {
      name: "Library",
      list: [
        {
          name: "Xamarin",
          mylist: [
            "Desktop",
            "Document",
            "Downloads",
            "Movies",
            "Music",
            "Pictures",
          ],
        },
        {
          name: "Ionic",
          mylist: ["Pictures", "Downloads", "Desktop", "Document", "Music"],
        },
        {
          name: "PhoneGap",
          mylist: ["Movies", "Music", "Pictures", "Document", "Downloads"],
        },
        { name: "Shared", mylist: ["Desktop", "Document", "Downloads"] },
        { name: "SwiftUI", mylist: ["Document", "Downloads", "Movies"] },
      ],
    },
    {
      name: "System",
      list: [
        {
          name: "CPU",
          mylist: [
            "Desktop",
            "Document",
            "Downloads",
            "Movies",
            "Music",
            "Pictures",
          ],
        },
        {
          name: "RAM",
          mylist: ["Pictures", "Downloads", "Desktop", "Document", "Music"],
        },
        {
          name: "HDD",
          mylist: ["Movies", "Music", "Pictures", "Document", "Downloads"],
        },
        { name: "SSD", mylist: ["Desktop", "Document", "Downloads"] },
        { name: "GPU", mylist: ["Document", "Downloads", "Movies"] },
        { name: "Motherboard", mylist: ["Movies", "Music", "Pictures"] },
      ],
    },

    {
      name: "User",
      list: [
        {
          name: "Adam",
          mylist: [
            "Desktop",
            "Document",
            "Downloads",
            "Movies",
            "Music",
            "Pictures",
          ],
        },
        {
          name: "Ghost",
          mylist: ["Pictures", "Downloads", "Desktop", "Document", "Music"],
        },
        {
          name: "Guest",
          mylist: ["Movies", "Music", "Pictures", "Document", "Downloads"],
        },
        { name: "Shared", mylist: ["Desktop", "Document", "Downloads"] },
        { name: "thing", mylist: ["Document", "Downloads", "Movies"] },
        { name: "tonyce", mylist: ["Movies", "Music", "Pictures"] },
      ],
    },
  ];
  function getlist(data) {
    console.log(data);
    setList(data);
  }
  function getchildlist(value) {
    setChild(value)
  }
  console.log(list);
  return (
    <>
      <Topbar />
      <div className="nested-container">
        <div className="nestd-main-list">
          {a.map((val, index) => (
            <div className="f-icon" onClick={() => getlist(val.list)}>
              <p className="image-start">
                <img className="icon-size" src={ficon} alt="" title="" />
              </p>
              <p className="box-list">
                {val.name}
              </p>
              <p className="image-end">
                <img className="icon-size" src={arrow} alt="" title="" />
              </p>
            </div>
          ))}
        </div>
        <div className="nestd-main-list">
          {list.length == 0 ? (
            ""
          ) : (
            <div>
              {list.map((val, index) => (
                <div className="f-icon"  onClick={() => getchildlist(val.mylist)}>
                  <p className="image-start">
                    <img className="icon-size" src={ficon} alt="" title="" />
                  </p>
                  <p
                    className="box-list"
                  >
                    {val.name}
                  </p>
                  <p className="image-end">
                    <img className="icon-size" src={arrow} alt="" title="" />
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="nestd-main-list">
          {child.length == 0 ? (
            ""
          ) : (
            <div>
              {child.map((val, index) => (
                <div className="f-icon">
                  <p className="image-start">
                    <img className="icon-size" src={ficon} alt="" title="" />
                  </p>
                  <p className="box-list">{val}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NestedList;
