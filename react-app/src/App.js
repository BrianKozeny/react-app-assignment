import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './header_component.jsx';
import InputBar from './input_component.jsx';
import './App.css';

function App() {
    
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
        
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <InputBar 
                    inputValue = { inputValue }
                    setInputValue = { setInputValue }
                />
            </div>
        </div>
    );
}

export default App;
