const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(connectionStr)

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... :raised_hands: :raised_hands: :raised_hands:`); 
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error :disappointed_relieved:', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  :zap:️ :electric_plug: :zap:️'));


// const { MONGODB_URL } = process.env;
// const mongoose = require('mongoose');

// const connectionStr = 'mongodb://localhost:27017/capstone';

// mongoose.connect(connectionStr, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });
//   // Connection Events
//   mongoose.connection
//     .on("open", () => console.log("Your are connected to mongoose"))
//     .on("close", () => console.log("Your are disconnected from mongoose"))
//     .on("error", (error) => console.log(error));