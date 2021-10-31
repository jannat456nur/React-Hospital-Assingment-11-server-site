const express = require('express')
const { MongoClient } = require('mongodb');

require('dotenv').config()
const app = express();
const port = 5000;


const uri = `mongodb+srv://${process.env.DB_USERS}:${process.env.DB_PASS}@cluster0.69qz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        console.log('connected')
        const database = client.db('ass-11')
        const servicesCollection = database.collection('services')



        //POST API
        app.post('/', async (req, res) => {


            const service = {
                "name": "Express delivery",
                "p": "This services ensures that yout urgent documents or packages the recipient at the earliest",
                "phn": "Serial: +8801841461631",
                "price": "$20",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf4OMxPKU3Y48rR_EgUMrU6-Mkrm1AMwJ4qg2GCqk4daat22a0YnPG9ARWuln7m1ZaI4&usqp=CAU"
            }
            const result = await servicesCollection.insertOne(service)
        })
    }


    finally {

    }

}

run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('running')
})

app.listen(port, () => {
    console.log('genious', port)
})