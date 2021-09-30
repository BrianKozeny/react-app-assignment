import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Input_bar() {

   function  handleInputChange(e) {
        setInputValue(e.target.value);
    }

    const [inputValue, setInputValue] = useState("");

    console.log(inputValue)


    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{width: 500, maxWidth:'100%',}}>
                    <TextField fullWidth label="Type new item" value={inputValue} onChange={handleInputChange}  id="fullWidth" />
                    <Box p={1}>
                        <Button type="submit" sx={{width: 95, height: 50, }} orientaion="horizontal" display="flex" style={{ fontSize: '12px' }} variant="contained">Add item</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Input_bar;
