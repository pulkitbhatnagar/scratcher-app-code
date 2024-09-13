import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

export default function MidArea({ setDataVal, data }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'div',
        drop: (item) => addDataToMidValue(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    console.log(isOver);
    const addDataToMidValue = (item) => {
        const { detail } = item;
        setDataVal((action) => [...action, detail]);
    };

    return (
        <div className="flex-1 h-full overflow-auto" ref={drop}>
            {data.map((value) => {
                return <div id={value.id}>{value.text()}</div>;
            })}
        </div>
    );
}
