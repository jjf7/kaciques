import User from "../models/User";
import Role from "../models/Role";


export const changePass = async (req, res) => {
  const { password } = req.body;

  if (password == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
   
    try {
      // encrypting password
      const newPassword = await User.encryptPassword(password);
      await User.findByIdAndUpdate(req.params.id, {password:newPassword}, {
        new: true,
        useFindAndModify: false,
      }).populate("roles");
      res.status(200).json("success");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body;
  if (username == "" || email == "" || roles == "" || password == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    try {
      const rolesFound = await Role.find({ name: { $in: roles } });

      // creating a new User
      const user = new User({
        username,
        email,
        password,
        roles: rolesFound.map((role) => role._id),
      });

      // encrypting password
      user.password = await User.encryptPassword(user.password);

      // saving the new user
      await user.save();

      return res.status(201).json("success");
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("roles", {
      name: 1,
    });

    let rows = users.map((i) => {
      return {
        id: i._id,
        id_role: i.roles[0]._id,
        role: i.roles[0].name,
        username: i.username,
        email: i.email,
        password: i.password,
      };
    });
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  const { username, email, roles } = req.body;

  if (username == "" || email == "" || roles == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    console.log(req.body);
    try {
      await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
      }).populate("roles");
      res.status(200).json("success");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

export const deleteUser = async (req, res) => {
  const query = { _id: req.params.id };
  try {
    await User.findByIdAndRemove(query);
    console.log("Eliminado ID: ", req.params.id);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
