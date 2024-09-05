import React, { useEffect, useState } from "react";
import CatSprite from "./CatSprite";
import { replaceStringToValueScratcher } from "./util";

export default function PreviewArea({
  data = [],
  onClickData,
  sayHello,
  display,
  displayTextToShow,
  setDisplayTextToShow,
  flagButtonClicked,
  setDisplay,
  spiritAdd,
  repeat10,
}) {
  const [xScale, setXScale] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [click, setClick] = useState(false);
  useEffect(() => {
    setXScale(onClickData.xScale);
    setRotate(onClickData.rotate);
  }, [onClickData]);

  useEffect(() => {
    if (data.length > 0 && (flagButtonClicked || click)) {
      console.log("dasdadasd", data, flagButtonClicked);
      setXScale(0);
      setRotate(0);
      data.forEach((value, index) => {
        if (value.action === "move") {
          setXScale((prev) => prev + 1);
        } else if (value.action === "rotate-15") {
          setRotate((prev) => prev + 15);
        } else if (value.action === "anti-rotate-15") {
          setRotate((prev) => prev - 15);
        } else if (value.action === "sayHello") {
          setDisplayTextToShow((prev) => !prev);
        } else if (value.action === "show") {
          setDisplay(true);
        } else if (value.action === "hide") {
          setDisplay(false);
        } else if (value.action === "repeat10" && index + 1 <= data.length) {
          if (data[index + 1].action === "move") {
            setXScale((prev) => parseInt(prev) + parseInt(repeat10));
          } else if (data[index + 1].action === "rotate-15") {
            setRotate((prev) => parseInt(prev) + parseInt(repeat10 * 15));
          } else if (data[index + 1].action === "rotate-15") {
            setRotate((prev) => parseInt(prev) - parseInt(repeat10 * 15));
          }
        }
      });
    }
  }, [data, flagButtonClicked, click, repeat10,setDisplay,setDisplayTextToShow]);

  const spiritClicked = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      {spiritAdd.map((value) => {
        return (
          <>
            {display && (
              <div
                id={value.id}
                className={
                  "flex-none overflow-y-auto p-2 h-1/4 w-max transform " +
                  replaceStringToValueScratcher("translate-x-{val}", {
                    val: xScale,
                  }) +
                  " " +
                  (rotate > 0
                    ? replaceStringToValueScratcher("rotate-{val}", {
                        val: rotate,
                      })
                    : replaceStringToValueScratcher("-rotate-{val}", {
                        val: Math.abs(rotate),
                      }))
                }
                onClick={spiritClicked}
              >
                {displayTextToShow && (
                  <div className="w-max h-9 bg-white bg-gray-500 rounded-full">
                    <p className=" p-3 bg-gray-500 rounded-full ">{sayHello}</p>
                  </div>
                )}
                <CatSprite />
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
