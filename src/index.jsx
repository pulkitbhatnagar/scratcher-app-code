import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'tailwindcss/tailwind.css';
import ScratcherContext from './ScratcherAppContext.jsx';

ReactDOM.render(
    <React.StrictMode>
        <ScratcherContext>
            <App />
        </ScratcherContext>
    </React.StrictMode>,

    document.getElementById('root')
);
