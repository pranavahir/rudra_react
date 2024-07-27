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

const Dashboard = () => {
  return (
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#09111B', color: 'white', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: '#0A1929', boxShadow: 'none', mb: 3 }}>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: 2 }}>
            <Grid item>
              <Typography variant="h6">Dashboard</Typography>
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
          <Grid item xs={12} md={3}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Total Users Connected</Typography>
              <Typography variant="h4">80.4 TB</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Nodes Health</Typography>
              <Typography variant="h4">23K/24.2K</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Online Workers</Typography>
              <Typography variant="h4">201/545</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Active Projects</Typography>
              <Typography variant="h4">45</Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Performance</Typography>
              <Box sx={{ height: 200, backgroundColor: '#0E2A47', mt: 2 }} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, backgroundColor: '#0A1929', color: 'white' }}>
              <Typography variant="h6">Data Usage</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Node 1" secondary="50GB/200GB" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Node 2" secondary="75GB/200GB" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Node 3" secondary="30GB/200GB" sx={{ color: 'white' }} />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Dashboard;
