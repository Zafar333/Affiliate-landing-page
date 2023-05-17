import { airlineUserSchema } from "../Database/auth/UserSchema.js";
export const airlineDeleteReq = async (req, res) => {
  let id = req.params.delete;
  try {
    let result = await airlineUserSchema.findByIdAndDelete({ _id: id });
    if (result) {
      res.json({ msg: "Your data is deleted", status: 200 });
    } else {
      res.json({ msg: "Something went wrong" });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
