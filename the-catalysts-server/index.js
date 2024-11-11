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
      const query = {approvalStatus: "pending"}
      const cursor = eventCollection.find(query)
      
      const result = await cursor.toArray();
      res.send(result);
  })
  const roomCollection = client.db('project').collection('rooms');
    app.get('/rooms', async( req, res) => {
      const cursor = roomCollection.find()
      const result = await cursor.toArray();
      res.send(result);
  })





  app.put('/events/:id', async (req, res) => {
    const id = req.params.id;
    const { approvalStatus } = req.body; // expects "approved" or "rejected" in the body
    
    
    try {
        const filter = { _id: new ObjectId(id) };
        const update = {
            $set: {
                approvalStatus: approvalStatus
            }
        };
        const options = { upsert: true };

        const result = await eventCollection.updateOne(filter, update, options);
        if (result.upsertedCount === 1) {
            res.status(201).json({ message: `Event created and ${approvalStatus} successfully.` });
        } else if (result.modifiedCount === 1) {
            res.status(200).json({ message: `Event ${approvalStatus} successfully.` });
        } else {
            res.status(404).json({ message: "Event not found or already in the desired state." });
        }
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'An error occurred.' });
    }
});

// Endpoint to approve or decline a room with upsert
app.put('/rooms/:id', async (req, res) => {
    const id = req.params.id;
    const { approvalStatus } = req.body; // expects "approved" or "rejected" in the body
    console.log(req.body);
    try {
        const filter = { _id: new ObjectId(id) };
        const update = {
            $set: {
                approvalStatus: approvalStatus
            }
        };
        const options = { upsert: true };

        const result = await roomCollection.updateOne(filter, update, options);
        if (result.upsertedCount === 1) {
            res.status(201).json({ message: `Room created and ${approvalStatus} successfully.` });
        } else if (result.modifiedCount === 1) {
            res.status(200).json({ message: `Room ${approvalStatus} successfully.` });
        } else {
            res.status(404).json({ message: "Room not found or already in the desired state." });
        }
    } catch (error) {
        console.error('Error updating room:', error);
        res.status(500).json({ message: 'An error occurred.' });
    }
});



  

  app.post('/event', async(req, res) => {
    
    
    const event = req.body;
    console.log('new event', event);
    const result = await eventCollection.insertOne(event);
    res.send(result);
});



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



// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: '*' } });
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // MongoDB Connection URI
// const uri = "mongodb+srv://asheq100mahmud:fSMZQG9KJS6VOyiJ@cluster1.uryi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// const client = new MongoClient(uri, {
//   serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     const db = client.db('project');
//     const messageCollection = db.collection('messages');

//     // Endpoint to retrieve messages by clubId
//     app.get('/messages/:clubId', async (req, res) => {
//       const { clubId } = req.params;
//       try {
//         const messages = await messageCollection.find({ clubId }).sort({ timestamp: 1 }).toArray();
//         res.json(messages);
//       } catch (error) {
//         res.status(500).json({ error: "Error fetching messages" });
//       }
//     });

//     // Socket.io connection for real-time messaging
//     io.on('connection', (socket) => {
//       console.log('A user connected:', socket.id);

//       socket.on('joinRoom', (clubId) => {
//         socket.join(clubId);
//         console.log(`User ${socket.id} joined room: ${clubId}`);
//       });

//       // Handle incoming messages from clients
//       socket.on('sendMessage', async ({ clubId, message, sender }) => {
//         const chatMessage = { clubId, message, sender, timestamp: new Date() };

//         try {
//           // Save message to MongoDB
//           await messageCollection.insertOne(chatMessage);

//           // Emit the message to everyone in the room
//           io.to(clubId).emit('receiveMessage', chatMessage);
//         } catch (error) {
//           console.error("Error saving message:", error);
//         }
//       });

//       socket.on('disconnect', () => {
//         console.log('A user disconnected:', socket.id);
//       });
//     });

//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// }

// connectToDatabase().catch(console.dir);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Chat application is running');
// });

// // Start server
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // To parse JSON request bodies

// // MongoDB Connection URI
// const uri = "mongodb+srv://asheq100mahmud:fSMZQG9KJS6VOyiJ@cluster1.uryi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// const client = new MongoClient(uri, {
//   serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     const db = client.db('project');
//     const eventCollection = db.collection('event');

//     app.post('/event', async(req, res) => {
//       const event = req.body;
//       console.log('new event', event);
//       const result = await eventCollection.insertOne(event);
//       res.send(result);
//   });

//     // Endpoint to handle event creation
    

//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// }

// connectToDatabase().catch(console.dir);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Event Management Backend is running');
// });

// // Start server
// server.listen(port, () => {
//   console.log("Server running on port ${port}");
// });