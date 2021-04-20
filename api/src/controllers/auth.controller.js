import User from "../models/User";
import Role from "../models/Role";

import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { username, email, password, roles } = req.body;
    // Creating a new User Object
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    // checking for roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const signin = async (req, res) => {

  const { email, password } = req.body;

  if (email == "" || password == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {

  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json("No existe el usuario");

    const matchPassword = await User.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json("Contrasena Invalida");

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    const data = {
      username:userFound.username,
      email:userFound.email,
      role:userFound.roles[0].name,
      token
    }
    res.json(data);
  } catch (error) {
    console.log(error.message);
  }

}
};