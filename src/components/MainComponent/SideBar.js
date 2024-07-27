import React from 'react';
import {
  Typography, Button, Drawer, AppBar, Card, Grid, IconButton, Avatar, Tooltip,
  List, ListItem, ListItemIcon, ListItemText, Link, TextField, Autocomplete, Divider,
  Menu, MenuItem, Box, ImageList, ImageListItem
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const Sidebar = () => {
  const Logout = () => {
    localStorage.clear()
    window.location.reload();
  }
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#09111B',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
            Rudra Task
          </Typography>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button  onClick={() => Logout()}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar;