import React from "react";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { ItemKeyComponent } from "./components/ItemKeyComponent";
import { DrawComponent } from "./components/DrawComponent";
import { useCounter } from "./hooks/useCounter";
import "./styles.css";

export const HangManComponent = () => {
    const [counter, incrementCounter, decrementCounter, resetCounter] = useCounter(0, { max: 6, min: 0 });
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent stage={counter} />
            <KeyBoardComponent />
            <ItemKeyComponent />
        </div>
    );
};