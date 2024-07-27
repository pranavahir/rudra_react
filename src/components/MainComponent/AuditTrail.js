"use client"
import React, { useEffect,useState } from 'react';
import axios from "axios"
import {
  Typography, Button, Drawer, AppBar, Card, Grid, IconButton, Avatar, Tooltip,
  List, ListItem, ListItemIcon, ListItemText, Link, TextField, Autocomplete, Divider,
  Menu, MenuItem, Box, ImageList, ImageListItem
} from '@mui/material';
const AuditTrail = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchUsersQuery = {
      query: `
        query {
          fetchUsers {
            message
            UserResponse {
              email
              id
              is_verified
              username 
            }
          }
        }
      `
    };
    axios.post(
      'http://localhost:4000/graphql',
      fetchUsersQuery,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
    .then(response => {
      if(response?.data?.data?.fetchUsers?.message === "UnAuthorized!"){
        localStorage.clear()
        window.location.reload();
      }
      else{
        console.log(response?.data?.data?.fetchUsers?.message,"MESSAGSGEE")
        setData(response?.data?.data?.fetchUsers?.UserResponse)
      }
    })
    .catch(error => {
      console.log(error,"response")
    });
  }, [])
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#09111B', color: 'white', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#0A1929', boxShadow: 'none', mb: 3 }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: 2 }}>
          <Grid item>
            <Typography variant="h6">Users</Typography>
          </Grid>
          <Grid item>
            <Tooltip title="Profile">
              <IconButton>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
            <Typography variant="h6">User List</Typography>
            <List>
              {data.map((user) => (
                <ListItem key={user.id}>
                  <ListItemText
                    primaryTypographyProps={{ sx: { color: 'white' } }} // Ensure primary text color
                    secondaryTypographyProps={{ sx: { color: 'lightgray' } }} // Ensure secondary text color
                    primary={`Username: ${user.username}`}
                    secondary={`Email: ${user.email} | Verified: ${user.is_verified ? 'Yes' : 'No'}`}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuditTrail  