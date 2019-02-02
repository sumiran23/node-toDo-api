const { MongoClient, ObjectID } = require('mongodb');   // Here ObjectID is a constructor function used to create documents

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
     if (err) {
         console.log('There was error connecting to mongodb');
         return;
     }

     console.log('Succesfully connected to mongodb');
     const db = client.db('ToDoApp');

     db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('5c55a7268fa03604439d7fd1')},
     { $set: {text: 'Do the work fast'} },{returnOriginal: false}).then((result) => {
         console.log(result);
     });
     
});