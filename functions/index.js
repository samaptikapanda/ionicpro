const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const app=express();

var admin = require("firebase-admin");

var serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject-d523a-default-rtdb.firebaseio.com"
});


app.use("/api",require("./Router/router"));

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors())

exports.app=functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
