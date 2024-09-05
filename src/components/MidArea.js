import React, {  useState } from "react";
import { useDrop } from "react-dnd";
export default function MidArea({ setDataVal }) {
  const [data, setData] = useState([]);
  const [ { isOver },drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addDataToMidValue(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addDataToMidValue = (item) => {
    const { detail } = item;
    setData((action) => [...action, detail]);
    setDataVal((action) => [...action, detail]);
  };
  console.log(isOver)
  return (
    <div className="flex-1 h-full overflow-auto" ref={drop}>
      {data.map((value) => {
        return <div id={value.id}>{value.text()}</div>;
      })}
    </div>
  );
}
