const{ MongoClient}=require('mongodb');
const url='mongo://localhost:27017';
const database='vyas'
const client =new MongoClient(url);
 async function getData()
{
    let result= await client.connect();
   let db= result.db(database);
   let collection = db.collection('resume');
   let response = await collection.find({}).toArray();
   console.log(response);

}
