import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const  ItemList = (props) => {
    return(
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" sx={{width: 500, maxWidth:'100%', bgcolor: 'text.secondary'}}>
                    <List>
                        {props.items.map(item => (
                            <ListItem key={item.id}>
                                <Box display="flex" bgcolor="secondary.main" sx={{width: 500, maxWidth:'100%',}}>
                                    <ListItemText sx={{textAlign: 'center' }}> {item.value} </ListItemText>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
        </>
    )

}

export default ItemList;
