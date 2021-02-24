import React from 'react';
import './App.css';
import PlzEingabe from "./plzeingabe/plzeingabe";
import logo from './logo.svg'

function App() {
    return (
        <main>
            <img alt={'logo'} title={'logo'} src={logo}/>
            <PlzEingabe/>
        </main>
    );
}

export default App;
