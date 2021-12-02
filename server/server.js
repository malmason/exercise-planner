const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Verify this path after testing. 
app.use(express.static("client/public"));

// TEST OUT THE GET REQUEST FOR ALL EXERCISES IN ENGLISH UNDER THE CHEST CATEGORY, RETURN TO CLIENT WHEN CALLED. 

var config = {
  method: 'get',
  url: 'https://wger.de/api/v2/exercise?language=2&category=11&limit=100',
  headers: { 
    'Cookie': 'sessionid=djyx9333tv9nwrv8r6xryl6sdvyop3xl'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
