const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  content: String,
  state:Integer,
  time:time,
  owner: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  created_at: {
    type: String,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;