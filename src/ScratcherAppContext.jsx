import React, { createContext, useContext, useState } from 'react';
let Scratcher = createContext();
const ScratcherContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [onClickData, setOnClick] = useState({
        xScale: 0,
        rotate: 0,
    });
    const [sayHello, setHello] = useState('');
    const [display, setDisplay] = useState(true);
    const [displayTextToShow, setDisplayTextToShow] = useState(false);
    const [flagButtonClicked, setFlagButtonClicked] = useState(false);

    const [spiritAdd, setSpiritAdd] = useState([{ id: 0 }]);
    const [repeat10, setRepeat10] = useState();

    return (
        <Scratcher.Provider
            value={{
                data,
                setData,
                onClickData,
                setOnClick,
                sayHello,
                setHello,
                display,
                setDisplay,
                displayTextToShow,
                setDisplayTextToShow,
                flagButtonClicked,
                setFlagButtonClicked,
                spiritAdd,
                repeat10,
                setRepeat10,
                setSpiritAdd,
            }}
        >
            {children}
        </Scratcher.Provider>
    );
};
export default ScratcherContext;

export const ScratcherState = () => {
    return useContext(Scratcher);
};
