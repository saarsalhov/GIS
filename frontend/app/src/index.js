import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import './App.css'
// import './scripts/govmap.api'


const container = document.getElementById('root');
const root = createRoot(container); //
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('root'));



