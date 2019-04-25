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
     const { nickName, passWord } = req.params;
     const user = await userService.authUser(nickName, passWord);
     res.json({ user });
   } catch (e) {
     res.status(400).json({ message: e });
   }
};