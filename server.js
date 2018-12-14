const express = require("express");

const PORT = 3000;
const SERVER_START_MESSAGE = "YEAY boi it's lit all up in here.";

const app = express();

app.listen(PORT,()=>{
	console.log(SERVER_START_MESSAGE);
});