import React from 'react';
import Grid from '@mui/material/Grid';

function Header() {
    return(
        <>
            <Grid container  sx={{width: "auto", backgroundColor: "#e4f0f9", }} direction="column" alignItems="center" justifyContent="center">
                <h1>Manage my items</h1>
            </Grid>
        </>
    )
}

export default Header;
