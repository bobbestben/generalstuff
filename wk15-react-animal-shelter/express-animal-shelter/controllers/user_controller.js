const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports = {
  register: async (req, res) => {
    // do validations ...

    const validatedValues = req.body;

    try {
      const user = await userModel.findOne({ email: validatedValues.email });
      if (user) {
        return res.status(409).json({ error: "user exists" });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const passHash = await bcrypt.hash(req.body.password, 10);
    const user = { ...req.body, password: passHash };

    try {
      await userModel.create(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to register user" });
    }

    return res.json();
  },

  login: async (req, res) => {
    // do validations ...

    const validatedValues = req.body;
    let errMsg = "user email or password is incorrect";
    let user = null;

    try {
      user = await userModel.findOne({ email: validatedValues.email });
      if (!user) {
        return res.status(401).json({ error: errMsg });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const isPasswordOk = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordOk) {
      return res.status(401).json({ error: errMsg });
    }

    // generate JWT and return as response
    // const userData = {
    //     email: user.email,
    //     name: user.name,
    // }
    // const token = jwt.sign({
    //     exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
    //     data: userData,
    // }, process.env.JWT_SECRET)

    // return res.json({token})
    sendToken(userDTO, 200, res);
    // res.status(200).json({
    //   success: true,
    //   token: "helloworld",
    // });
  },

  profile: async (req, res) => {
    let user = null;
    let userAuth = res.locals.userAuth;

    if (!userAuth) {
      console.log(userAuth);
      return res.status(401).json();
    }

    try {
      user = await userModel.findOne({ email: userAuth.data.email });
      if (!user) {
        return res.status(404).json();
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const userData = {
      name: user.name,
      email: user.email,
    };

    return res.json(userData);
  },
};
