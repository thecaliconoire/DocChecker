import React from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import DocList from './components/list/list'
import Dropzonebox from './components/drag_drop';
import { createMuiTheme } from '@material-ui/core/styles';



function App() {
  return (
    <div className="App">
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" color="grey">
            File Tracker
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
