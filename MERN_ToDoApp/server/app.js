const express = require("express");
const dotenv = require("dotenv").config(); // This is required to use .env files
const mongoose = require("mongoose"); // We will use this to connect to mongoDB
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes"); // We import the routes we created

// Initialize app and port
const app = express();
// We set two possible values as the PORT. If there is no PORT defined in our .env file
// it will go to the next possible value which will be 3001, but you can set it to whatever
// you want
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
// This will make the server understand JSON data that is passed from the frontend
app.use(express.json());
// urlencoded will make the server understand regular form data, if you do not pass JSON data from the frontend
app.use(express.urlencoded({ extended: true }));

// connect to the database
mongoose
	.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
	.catch(err => console.log(err));

// routes
app.use("/todo", todoRoutes);
