const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://asheq100mahmud:fSMZQG9KJS6VOyiJ@cluster1.uryi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db('project').collection('users');
    app.get('/users', async( req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray();
      res.send(result);
  })
  const eventCollection = client.db('project').collection('event');
    app.get('/event', async( req, res) => {
      const cursor = eventCollection.find()
      const result = await cursor.toArray();
      res.send(result);
  })
  const roomCollection = client.db('project').collection('room');
    app.get('/room', async( req, res) => {
      const cursor = roomCollection.find()
      const result = await cursor.toArray();
      res.send(result);
  })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) =>{
  res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () =>{
  console.log(`SIMPLE CRUD is running on port, ${port}`)
})