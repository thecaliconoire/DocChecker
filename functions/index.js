const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp(functions.config().firebase)
let db = admin.firestore();


exports.onFileUpload = functions.storage.object().onFinalize(event=>{
    console.log(event)
    const name = event.name
    const size = event.size
    const timeCreated = event.timeCreated
    console.log ("Fuego", name, size, timeCreated)
    const docRef = db.collection('files').doc()
    console.log("tossing salad", docRef)
    return fileRef = docRef.set({
        name: event.name,
        size: event.size,
        timeCreated: event.timeCreated
    }).then(obj=>{
         console.log("FilesRef: ",
         obj, "OBJ", fileRef)
    }).catch(error => {
        console.log("error", error)
    })
    
});


