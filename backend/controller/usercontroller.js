const User = require("../modal/usermodal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// const transport = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "gaurishankerpctebtech2020@gmail.com",
//     password: "ncoogmgijzesdqlu",
//   },
// });

const checkPasswordLength = (password) => {
  return password.length < 6 ? true : false;
};

const containsNumber = (password) => {
  const numbers = /[0-9]/;
  return numbers.test(password);
};

const containsSymbol = (password) => {
  const symbols = /[!@#$%^&*(){}?<>]/;
  return symbols.test(password);
};

const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9999);
};

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password)
      return res.status(403).json({ message: "please fill all the fields" });
    
    const user = await User.findOne({ email });
    if (user) return res.status(403).json({ message: "user already exist" });

    if (checkPasswordLength(password))
      return res
        .status(403)
        .json({ message: "cannot be less then 6 characters" });
    if (!containsNumber(password))
      return res
        .status(403)
        .json({ message: "password must contain a number" });
    if (!containsSymbol(password))
      return res
        .status(403)
        .json({ message: "password must contain a symbol" });
    const hashedpassword = await bcrypt.hashSync(password, 10);
    const otp = generateOtp();
    const newuser = await User.create({
      fullname,
      email,
      password: hashedpassword,
      otp,
    });

    res
      .status(200)
      .json({ success: true, message: "registered successfully", newuser });
  } catch (error) {
    console.log(error);
  }
};

const userlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({
        success: false,
        message: "please fill all the fields",
      });
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({
        message: "invalid credentials",
      });
    const ispasswordmatch = await bcrypt.compare(password, user.password);
    if (!ispasswordmatch)
      return res.status(404).json({
        message: "invalid credentials",
      });
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token, {
      expire: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "invalid credentials",
    });
  }
};
const userLogout = (req, res) => {
  const token = req.cookies["token"];

  if (!token)
    return res
      .status(400)
      .json({ success: false, message: "Already logged out" });
  console.log(token);

  res.clearCookie("token");
  res.status(200).json({ success: true, message: "logged out" });
};

module.exports = { registerUser, userlogin, userLogout };
