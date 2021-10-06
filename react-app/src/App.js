import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import InputBar from './InputBar';
import ItemList from './ItemsList';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './App.css';

function App() {
     
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
        
    return (
        <Container>
            <Header />
            <InputBar 
                inputValue={inputValue}
                setInputValue={setInputValue}
                setItems={setItems}
                items={items}
            />
            <ItemList
                items = { items }
                setItems = { setItems }
                counter={items.length}
            />
        </Container>
    );
}

export default App;
