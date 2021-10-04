import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const  ItemList = (props) => {
    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{width: 500, maxWidth:'100%',}}>
                    <ul>
                        {props.items.map(item => (
                            <li key={item.id}>{item.value}</li>
                        ))}
                    </ul>
                </Box>
            </Grid>
        </>
    )

}

export default ItemList;
