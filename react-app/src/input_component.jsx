import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function Input_bar() {
    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{width: 500, maxWidth:'100%',}}>
                    <TextField fullWidth label="fullWidth" id="fullWidth" />
                </Box>
            </Grid>
        </>
    )
}

export default Input_bar;
