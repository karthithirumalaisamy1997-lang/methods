import ReactDOM from 'react-dom/client';
import './storage.js'; // installs window.storage polyfill (localStorage backed)
import App from './App.jsx';

// Note: StrictMode is intentionally NOT used here. The underlying app
// (ported from a single-file HTML build) manages its own global state and
// DOM via a classic script injected on mount; StrictMode's double-invoke
// behavior in development could cause it to initialize twice.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
