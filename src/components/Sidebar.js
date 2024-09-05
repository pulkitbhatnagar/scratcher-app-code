import React, { useEffect, useState } from "react";
import Icon from "./Icon";

import Dragable from "./Dragable";
export default function Sidebar({
  setOnClick,
  onClickData,
  setHello,
  setDisplay,
  sayHello,
  setDisplayTextToShow,
  setRepeat10,
  repeat10,
}) {
 
  const [count, setCount] = useState(0);
  const [rotateIS, setRotate] = useState(0);

  const move10Step = (e) => {
    setCount((prev) => prev + 1);
  };
 
  useEffect(() => {
    setOnClick({
      rotate: onClickData.rotate,
      xScale: count + 1,
    });
  }, [count,onClickData.rotate,setOnClick]);

  const show = () => {
    setDisplay(true);
  };
  const hide = () => {
    setDisplay(false);
  };

  const rotate15Degree = () => {
    setRotate((prev) => prev + 15);
  };
  const antiRotate15Degree = () => {
    setRotate((prev) => prev - 15);
  };

  useEffect(() => {
    setOnClick({
      xScale: onClickData.xScale,
      rotate: rotateIS,
    });
  }, [rotateIS,setOnClick,onClickData.xScale]);

  const displayTextToShowFunction = () => {
    setDisplayTextToShow((prev) => !prev);
  };

  const Events = [
    {
      id: 1,
      event: "EVENTS",
      text: () => {
        return (
          <div>
            <button className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60">
              {"When "}
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              {"clicked"}
            </button>
          </div>
        );
      },
    },
    {
      id: 2,
      event: "EVENTS",
      text: () => {
        return (
          <button className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60">
            {"When this sprite clicked"}
          </button>
        );
      },
    },
  ];
  const Motions = [
    {
      id: 3,
      event: "MOTIONS",
      action: "move",
      text: () => {
        return (
          <button
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            onClick={(e) => move10Step(e)}
          >
            {"Move 10 steps"}
          </button>
        );
      },
    },
    {
      id: 4,
      event: "MOTIONS",
      action: "rotate-15",
      text: () => {
        return (
          <button
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            onClick={rotate15Degree}
          >
            {"Turn "}
            <Icon name="redo" size={15} className="text-white mx-2" />

            {"15 degrees"}
          </button>
        );
      },
    },
    {
      id: 5,
      event: "MOTIONS",
      action: "anti-rotate-15",
      text: () => {
        return (
          <button
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            onClick={antiRotate15Degree}
          >
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </button>
        );
      },
    },
  ];

  const Looks = [
    {
      id: 6,
      event: "Looks",
      action: "sayHello",
      text: () => {
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            //onClick={displayTextToShow}
          >
            {"say  "}
            <input
              type="text"
              id="textDisplay"
              value={sayHello}
              placeHolder="helloo"
              onChange={(e) => {
                setHello(e.target.value);
              }}
              className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 text-black"
            />
            <button className=" w-10" onClick={displayTextToShowFunction}>
              +
            </button>
          </div>
        );
      },
    },
    {
      id: 7,
      event: "Looks",
      action: "show",
      text: () => {
        return (
          <button
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            onClick={show}
          >
            {"show  "}
          </button>
        );
      },
    },
    {
      id: 8,
      event: "Looks",
      action: "hide",
      text: () => {
        return (
          <button
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            onClick={hide}
          >
            {"hide  "}
          </button>
        );
      },
    },
  ];
  const Control = [
    {
      id: 9,
      event: "Control",
      action: "repeat10",
      text: () => {
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60"
            //onClick={displayTextToShow}
          >
            {"repeat "}{" "}
            <input
              type="text"
              id="textDisplay"
              placeholder="10"
              value={repeat10}
              onChange={(e) => {
                setRepeat10(e.target.value);
              }}
              className="w-28 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 text-black"
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      {" "}
      <div className="w-100 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        <div className="font-bold"> {"Events"} </div>
        {Events.map((value) => {
          return Dragable(value);
        })}
        <div className="font-bold"> {"Motion"} </div>
        {Motions.map((value) => {
          return Dragable(value);
        })}
        <div className="font-bold"> {"Looks"} </div>
        {Looks.map((value) => {
          return Dragable(value);
        })}
        <div className="font-bold">{"Control"}</div>

        {Control.map((value) => {
          return Dragable(value);
        })}
      </div>
    </>
  );
}
