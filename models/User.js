const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema ({
  nickname: String,
  password: String,
  avatarUrl: String,
  email: String,
  tasks:{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  },
  created_at: {
    type: String,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

