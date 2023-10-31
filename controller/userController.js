const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { encodedPassword, verifyPassword } = require("../utils/passwords");
const config = require("../config");

//Authorization controller
//signup controller
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("signup", name, email);

  const existingUser = await User.findOne({email: email});

  if(existingUser){
        res.status(200).send({
            message: "User Already Exists, pleasae login to continue!",
            User: existingUser,
        })
  }
  const hashedPassword = await encodedPassword(password);
  const newUser = new User({ name, email, password: hashedPassword });
  const result = await newUser.save();

  const resultObj = result.toObject();
  delete resultObj.password;
  res.send({
    message:'User has been succesfully registered!!!',
    user: resultObj,
  })
  
    const token = jwt.sign(resultObj, config.SECRET_KEY)
  res.cookie("cookie name", "1234", { maxAge: 999999, httpOnly: true });
  res.json(resultObj);
  console.log("token==> ",token);
};

//login controller
const logIn = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email }).select('password');

  if (existingUser) {
    const hashedPassword = existingUser.password;

    const isMatch = await verifyPassword(password, hashedPassword);

    if (isMatch) {
      const resultObj = existingUser.toObject();

      const token = await jwt.sign(
        { email: existingUser.email },
        config.SECRET_KEY,
      );
      res.cookie("ecomToken", token);
      // res.json({ status: 200, message: "Success" },  token);
     return  res.status(200).json({token: token, message:"Logged in successfully"});
    } else {
      return res.status(401).json({
        message: "Incorrect Password",
      });
    }
  } else {
    return res.status(401).json({
      message: "User NOt Find, try registering first :(",
    });
  }
};

//reset password controller

const resetPassword = async (req, res) => {
    const {email, password } = req.body;
    const hashedPassword = await encodedPassword(password);
    const user = await User.findOneAndUpdate({
        email: email.lowercase()
    },{
        password: hashedPassword
    },
    {
        new: true
    });

    if (user) {
        res.json({ status: "Success", message: "Password changed successfully" });
      } else {
        res.json({ status: 404, message: "User not found" });
      }


};

module.exports = {
  signUp,
  logIn,
  resetPassword,
};
