import React from 'react'
import {db} from '../../store/config'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { List, ListItemAvatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import "./styles.scss"

class DocSummary extends React.Component {
    state = {
        name: null,
        open: false,
        url: "",
        files: null,
        progress: 0
    }
  
  componentDidMount(){
    console.log('mounted')
    db.collection('files').get().then(snapshot=>{
      const files = []
      snapshot.forEach(doc => {
        const data =doc.data()
        files.push(data)
      })
      this.setState({files: files})
      console.log(files)
    })
    .catch(error=>console.log(error))
}
render(){
  return (
    <div className="divit">
      <div className="divit">
    
  <List>
  {this.state.files && this.state.files.map(file=>{
  
    return(
    
    <ListItem button ><FileCopyOutlinedIcon className="icon" fontSize="large"/>
    <p className="listcomp"><b>File Name: {file.name}</b>  
    <br/>  
    <b>Size (bytes): {file.size} </b>
    <br/> 
    <b>Created at: {moment(file.created.toDate()).calendar()}</b></p> </ListItem>
    )
    } )
  }
  
  </List>
      </div>
    </div>
  )
  }
  }

export default DocSummary