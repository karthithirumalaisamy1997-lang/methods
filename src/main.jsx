<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import './storage.js'; // installs window.storage polyfill (localStorage backed)
import App from './App.jsx';

// Note: StrictMode is intentionally NOT used here. The underlying app
// (ported from a single-file HTML build) manages its own global state and
// DOM via a classic script injected on mount; StrictMode's double-invoke
// behavior in development could cause it to initialize twice.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> ed4923deff914a348861dc80e6fee1c7b16860f8
