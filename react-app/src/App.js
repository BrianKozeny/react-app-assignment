import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import InputBar from './InputBar';
import ItemList from './ItemsList';
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
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setItems={setItems}
                    items={items}
                />
            </div>
            <div>
                <ItemList
                    items = { items }
                    setItems = { setItems }
                />
            </div>
        </div>
    );
}

export default App;
