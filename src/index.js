//import ReactDOM from 'react-dom/client';
import React from 'react';
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { HangManComponent } from './HangManComponent/HangManComponent';

//ReactDOM.render(<HangManComponent />, document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HangManComponent />);

const root = createRoot(document.getElementById('root'));
root.render(<HangManComponent />);
