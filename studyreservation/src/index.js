import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
export { default as Navigation } from "./components/Navigation";
export { default as StudyRooms } from "./components/StudyRooms";
export { default as MyReservations } from "./components/MyReservations";
export { default as PastReservations } from "./components/PastReservations";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);