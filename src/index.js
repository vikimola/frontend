import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LanguageProvider from "./static/components/languageProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <LanguageProvider>

        <App/>
    </LanguageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
