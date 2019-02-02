const { MongoClient, ObjectID } = require('mongodb');   // Here ObjectID is a constructor function used to create documents

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
     if (err) {
         console.log('There was error connecting to mongodb');
         return;
     }

     console.log('Succesfully connected to mongodb');
     const db = client.db('ToDoApp');

     db.collection('ToDos').insertOne({ text:'Do something', completed: false }, (error, result) => {
        if (err) {
            console.log('There was error inserting the document');
            return;
        } 

        console.log('Succesfully inserted the below documents');
        console.log(result.ops);

     })
     client.close();
});