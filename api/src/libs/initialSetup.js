import Settings from "../models/Settings";
import Products from "../models/Products";
import User from "../models/User";
import Role from "../models/Role";
import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin"] } });
  console.log(roles)
  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }

};

export const removeAllProducts = async () => {
  await Products.remove({})
  console.log('Se han eliminado todos los productos')
}

export const removeAllUsers = async () => {
  await User.remove({})
  console.log('Se han eliminado todos los usuarios')
}



export const createSetting = async () => {
  try {
    const count = await Settings.estimatedDocumentCount();

    console.log(count)

    if (count > 0) return;
   
   // const values = await Promise.all([new Settings({ dolar: 2334983.55 })]);
    const values = await new Settings({ dolar: 2334983.55 }).save();

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
