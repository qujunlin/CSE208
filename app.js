const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const socketIO = require('socket.io');
const { connectDatabase } = require('./database');
// const { configureSocket } = require('./socket');
const routes = require('./routes');
// const { refreshHotMessage } = require('./utils/cronTasks/hotMessage');

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);

connectDatabase();
// configureSocket(io);
// refreshHotMessage();

// app.set('io', io);
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

server.listen(8888, () => {
  console.log(`Server listening on http://localhost:8888`);
});

module.exports = { app, server };
