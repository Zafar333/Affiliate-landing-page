import { airlineUserSchema } from "../Database/auth/UserSchema.js";

const allUserdataGetREq = async (req, res) => {
  try {
    var result = await airlineUserSchema.find();
    res.json({ status: "200", result });
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
export default allUserdataGetREq;
