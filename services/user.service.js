const User = require('../models/User');

exports.createUser = async (data) => {
   const user = await User.create(data);
   return user;
};

exports.authUser = async (nickName, passWord) => {
  const user = await User.findOne({ nickName, passWord});
  return user;
};

exports.updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true });

exports.getRank = async() => {
  const users = await User.find();
  const rank = [10];
  for (let counter1 = 0; counter1 < 10; counter1++) {
    rank.push(users[counter]);
  }
  return rank;
};
