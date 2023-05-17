import { airlineUserSchema } from "../Database/auth/UserSchema.js";

const airlineSearchGetReq = async (req, res) => {
  try {
    var result = await airlineUserSchema.find({
      $or: [{ phonenumber: { $regex: req.params.search } }],
    });
    if (result) {
      res.json({ result });
    }
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
export default airlineSearchGetReq;
