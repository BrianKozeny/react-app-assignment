import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const  ItemList = (props) => {
    
    const handleRemove = (id) => {
        const newList = props.items.filter((items) => items.id !== id);

        props.setItems(newList);

        console.log(id);
    }
    
    console.log(props.counter)
    return(
        <>
            <Grid container direction="column" backgroundColor="#ddc9a2" alignItems="center" justifyContent="center">
                <Box  sx={{ width: 400,}}>
                    <ListItemText  sx={{ ml: 2, display: "flex",  justifyContent: "center" }}><h3>My Items ({props.counter})</h3></ListItemText>
                </Box>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: 400, maxWidth:'100%',}}>
                        <List>
                            {props.items.map(item => (
                                <ListItem key={item.id}>
                                    <Box sx={{display: "flex", bgcolor: "secondary.main", width: 400, maxWidth:'100%', backgroundColor: "#c28ea0"}}>
                                        <ListItemText sx={{textAlign: 'start-left', ml: 2 }} style={{ color: '#ffffff'}}> {item.value} </ListItemText>
                                        <Button onClick={() => handleRemove(item.id)} style={{ color: '#000000'}}>X</Button>
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
