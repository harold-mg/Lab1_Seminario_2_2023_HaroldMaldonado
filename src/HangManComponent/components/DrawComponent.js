import React from "react";
import { useCounter } from "../hooks/useCounter";

// export const DrawComponent = () => {
//     return (
//         <div>
//             <img src={`/assets/img6.png`} alt="test" />
//         </div>
//     );
// };
export const DrawComponent = ({ stage }) => {
    return (
        <div>
            <img src={`/assets/img${stage}.png`} alt="Hangman stage" />
        </div>
    );
};