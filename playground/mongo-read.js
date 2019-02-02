const { MongoClient, ObjectID } = require('mongodb');   // Here ObjectID is a constructor function used to create documents

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
     if (err) {
         console.log('There was error connecting to mongodb');
         return;
     }

     console.log('Succesfully connected to mongodb');
     const db = client.db('ToDoApp');

     db.collection('ToDos').find({_id: new ObjectID('5c55a6f31153fa043f683864')}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
     }, (error) => {
         console.log(error);
     });
     
});