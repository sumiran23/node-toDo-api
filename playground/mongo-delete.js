const { MongoClient, ObjectID } = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
     if (err) {
         console.log('There was error connecting to mongodb');
         return;
     }

     console.log('Succesfully connected to mongodb');
     const db = client.db('ToDoApp');

     // delete many
     /*db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result) => {
         console.log(result);
     });*/
     
     // delete one
     /*db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

    // findoneandelete
    db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
});