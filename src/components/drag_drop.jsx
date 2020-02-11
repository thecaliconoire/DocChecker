import React, { Component } from 'react'
import {DropzoneDialog, DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import storage, {db} from '../store/config';
import { AppBar } from '@material-ui/core';
import firebase from "firebase/app";
import './styles.scss'
import context from '../store/context'
// Todo: if-check when submitting 0 files:  TypeError: Cannot read property '0' of null
 
// Todo: fix upload process for arbitrary amount of files Solution: grey button so you cannot submit or print error on screen.
 
// Todo: store the firestore refs(!) in the firebase DB
 
// Todo: Display list of all URL's //DONE
 
// Todo: Make Pretty
export default class Dropzonebox extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('files');
        this.unsubscribe =null;
        this.state = {
            open: false,
            url: "",
            name: "",
            files: [],
            progress: 0,
            visible: true,
            showDropzone: true
        };
   
    }
 
   
 
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleChange(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
 
      handleSave = async () => {
         const { files } = this.state;
         const {name, size, created} = this.state
 
        files.forEach(async (file, index, array) => {
 
          const fileRef =
            firebase
            .storage()
            .ref("files")
            .child(`files/${file.name}`)
         
         console.log("fileRef ", fileRef)
 
         const uploadResult = await fileRef.put(file);
 
         console.log("Upload: ", uploadResult);
 
            this.ref.add({
                name: fileRef.name,
                size: uploadResult.totalBytes,
                created: new Date() 
            }).then((docRef)=>{
              if (index == array.length - 1) {
                this.setState({
                  files:[],
                  showDropzone: false
                })
              }
                
 
            })
            .catch((error)=> {
                console.error("Error adding document: ", error)
            });
 
        });
         
         
 
 
    }
 
 
 
    render() {
     
        return (
            <div >
              <div className={`dropzonearea ${this.state.showDropzone ? '' : 'display-none'}`}>
                <DropzoneArea
                    onChange={this.handleChange.bind(this)}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', 'application/pdf']}
                    maxFileSize={50000000}
                    showFileNamesInPreview={true}
                    filesLimit={5}
                    fullWidth={false}
                   
                />


                <br/>
                <br/>
 
       
                <div className={`button ${this.state.files.length > 0 ? '' : 'display-none'}`} >
                <Button variant="contained" color="primary" onClick={this.handleSave.bind(this)}>
                  Submit
                </Button>
                </div>
              </div>
              <div className={`${this.state.showDropzone ? 'display-none' : '' }`}>
                  <span> <h1>UPLOAD SUCCESS!!</h1> </span>
                </div>
            </div>
        );
    }
}