import React from 'react'
import {db} from '../../store/config'
import ListItem from '@material-ui/core/ListItem';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { List} from '@material-ui/core';
import "./styles.scss"

class DocSummary extends React.Component {
    state = {
        name: null,
        open: false,
        url: "",
        files: null,
        progress: 0
    }
  
getData = () => {
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
  componentDidMount(){
    let doc = db.collection('files')
    let observer = doc.onSnapshot(docSnapshot => {
      this.getData()
      console.log("Received doc snapshot:", docSnapshot);
    }, err => {
      console.log("Encountered error:", err);
    });
    
}
render(){
  return (
    <div className="divit">
      <div className="divit">
    
  <List>
  {this.state.files && this.state.files.map(file=>{
    
    return(
    <ListItem   button ><FileCopyOutlinedIcon className="icon" fontSize="large"/>
    <p className="listcomp"><b>File Name: {file.name}</b>  <br/>  <b>Size (bytes): {file.size} </b><br/> <b>Created at: {file.timeCreated}</b></p> </ListItem>
    )
  })
  }
  </List>
      </div>
    </div>
  )
  }
  }

export default DocSummary
