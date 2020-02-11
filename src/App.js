import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropzoneDialogExample from './components/drag_drop';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DocList from './components/list/list'
import Dropzonebox from './components/drag_drop';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className="menu-bar" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            File Upload
          </Typography>
        </Toolbar>

      </AppBar>
      <div className="dropzone"> <Dropzonebox /> </div>
      <br/>
      <br/>
        <div className="list"> <DocList/> </div>
    </div>
     
  );
}

export default App;
