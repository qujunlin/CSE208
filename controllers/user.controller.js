const { userServices } = require('../services');

exports.createUser = async (req, res) => {
  try{
    const data = req.body;
    console.log(data);
    const user = await userServices.createUser(data);
    res.json({ user });
  } catch (e){
    console.log(e);
    res.status(400).json({ message: e });
  }
};

exports.authUser = async (req, res) => { 
  try{
    const { nickname, password } = req.body;
    const user = await userServices.authUser(nickname, password);
    res.json({ user });
   } catch (e) {
    res.status(400).json({ message: e });
   }
};

exports.updateUser = async (req, res) => {
  try{
    const { id } = req.params;
    const data = req.body;
    const user = await userServices.updateUser(id, data, { new: true });
    res.json({ user });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.getRank = async (req, res) => {
  try{
    const rank = await userServices.getRank();
    res.json({ rank });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
