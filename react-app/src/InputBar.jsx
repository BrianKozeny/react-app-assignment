import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const InputBar = (props) => {

    const handleInputChange = (e) => (
        props.setInputValue(e.target.value)
    );

        
    const addItems = () => (
        props.setItems([...props.items, {
            id: props.items.length,
            value: props.inputValue
        }])
    );

    console.log(addItems)
    console.log(props)
    console.log(props.inputValue)


    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{width: 500, maxWidth:'100%',}}>
                    <TextField fullWidth label="Type new item" value={props.inputValue} onChange={handleInputChange}  id="fullWidth" />
                    <Box p={1}>
                        <Button sx={{width: 95, height: 50, }} value={props.inputValue} onClick={addItems} orientaion="horizontal" display="flex" style={{ fontSize: '12px' }} variant="contained">Add item</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default InputBar;
