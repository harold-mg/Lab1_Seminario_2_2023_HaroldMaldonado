import React from "react";
import { useKeyBoard } from "../hooks/useKeyboard";

export const ItemKeyComponent = () => {
    const [keyState, setKeyState] = useKeyBoard();
    const handlerClick = (key) => {
        const newState = keyState.map((item) => {
            if (key === item.key) {
                item.state = true;
            }
            return item;
        });
        setKeyState(newState);
    };
    return (
        <div className="flex-container">
            {keyState.map(({ key, state }) => (
                <div
                    key={key}
                    mykey={key}
                    //state={state}
                    state="false"
                    handlerClick={handlerClick}
                />
            ))}
        </div>
    );
};