import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Icon from "./components/Icon";
export default function App() {
  const [data, setData] = useState([]);
  const [onClickData, setOnClick] = useState({
    xScale: 0,
    rotate: 0,
  });
  const [sayHello, setHello] = useState();
  const [display, setDisplay] = useState(true);
  const [displayTextToShow, setDisplayTextToShow] = useState(false);
  const [flagButtonClicked, setFlagButtonClicked] = useState(false);
  const [spiritId, setSpiritId] = useState(0);
  const [spiritAdd, setSpiritAdd] = useState([]);
  const [repeat10, setRepeat10] = useState();

  const flagButtonClickedFun = () => {
    setFlagButtonClicked((prev) => !prev);
  };
  const createSpirit = () => {
    setSpiritId((prev) => prev + 1);
  };

  useEffect(() => {
    const idAdd = { id: spiritId };
    setSpiritAdd((prev) => [...prev, idAdd]);
  }, [spiritId]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="flex w-full">
          <div className="w-8/12">
            <button onClick={flagButtonClickedFun}>
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
            </button>
          </div>
          <div>
            <button onClick={createSpirit} class="bg-indigo-500">
              Create Spirit
            </button>
          </div>
        </div>
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar
              setOnClick={setOnClick}
              onClickData={onClickData}
              setHello={setHello}
              setDisplay={setDisplay}
              sayHello={sayHello}
              setDisplayTextToShow={setDisplayTextToShow}
              setRepeat10={setRepeat10}
              repeat10={repeat10}
            />{" "}
            <MidArea setDataVal={setData} />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 ">
            <PreviewArea
              data={data}
              onClickData={onClickData}
              sayHello={sayHello}
              display={display}
              setDisplay={setDisplay}
              displayTextToShow={displayTextToShow}
              setDisplayTextToShow={setDisplayTextToShow}
              flagButtonClicked={flagButtonClicked}
              spiritAdd={spiritAdd}
              repeat10={repeat10}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
