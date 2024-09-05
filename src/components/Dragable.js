import { useDrag } from "react-dnd";
import React from "react";
export default function Dragable(value) {
  const [ {isDragging},drag] = useDrag(() => ({
    type: "div",
    item: { detail: value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging)
  return (
    <div id={value.id} ref={drag}>
      {value.text()}
    </div>
  );
}
