import React, { useEffect, useState } from 'react';
import CatSprite from './CatSprite';
import { replaceStringToValueScratcher } from './util';

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
    setOnClick,
}) {
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (data.length > 0 && (flagButtonClicked || click)) {
            let xSide = 0;
            let rotate = 0;
            data.forEach((value, index) => {
                if (value.action === 'move') {
                    xSide = xSide + 1;
                } else if (value.action === 'moveBack') {
                    xSide = xSide - 1;
                } else if (value.action === 'rotate-15') {
                    rotate = rotate + 15;
                } else if (value.action === 'anti-rotate-15') {
                    rotate = rotate - 15;
                    if (rotate < 0) {
                        rotate = 360 - rotate;
                    }
                } else if (value.action === 'sayHello') {
                    setDisplayTextToShow((prev) => !prev);
                } else if (value.action === 'show') {
                    setDisplay(true);
                } else if (value.action === 'hide') {
                    setDisplay(false);
                } else if (
                    value.action === 'repeat10' &&
                    index + 1 < data.length
                ) {
                    if (data[index + 1].action === 'move') {
                        xSide = xSide + parseInt(repeat10) * 1;
                    } else if (data[index + 1].action === 'moveBack') {
                        xSide = xSide - parseInt(repeat10) * 1;
                        if (xSide < 0) {
                            xSide = 0;
                        }
                    } else if (data[index + 1].action === 'rotate-15') {
                        rotate = rotate + repeat10 * 15;
                        if (rotate >= 360) {
                            rotate = 0;
                        }
                    } else if (data[index + 1].action === 'anti-rotate-15') {
                        rotate = rotate - repeat10 * 15;
                        if (rotate < 0) {
                            rotate = 360 - rotate;
                        }
                    }
                }
            });

            setOnClick({ xScale: xSide, rotate: rotate });
        }
    }, [
        data,
        flagButtonClicked,
        click,
        repeat10,
        setDisplay,
        setDisplayTextToShow,
    ]);

    const spiritClicked = () => {
        setClick((prev) => !prev);
    };

    return (
        <>
            {spiritAdd?.map((value) => {
                return (
                    <>
                        {display && (
                            <div
                                id={value.id}
                                class={
                                    'flex-none overflow-y-auto p-2 h-1/4 w-max transform ' +
                                    replaceStringToValueScratcher(
                                        'translate-x-{val}',
                                        {
                                            val: onClickData.xScale,
                                        }
                                    ) +
                                    ' ' +
                                    (onClickData.rotate > 0
                                        ? replaceStringToValueScratcher(
                                              'rotate-{val}',
                                              {
                                                  val: onClickData.rotate,
                                              }
                                          )
                                        : replaceStringToValueScratcher(
                                              'rotate-{val}',
                                              {
                                                  val: onClickData.rotate,
                                              }
                                          ))
                                }
                                onClick={spiritClicked}
                            >
                                {displayTextToShow && (
                                    <div className="w-max h-9 bg-white bg-gray-500 rounded-full">
                                        <p className=" p-3 bg-gray-500 rounded-full ">
                                            {sayHello}
                                        </p>
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
