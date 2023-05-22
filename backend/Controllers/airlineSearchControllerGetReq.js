import { airlineUserSchema } from "../Database/auth/UserSchema.js";

const airlineSearchGetReq = async (req, res) => {
  try {
    var result = await airlineUserSchema
      .find({
        $or: [{ phonenumber: { $regex: req.params.search } }],
      })
      .lean();
    for (let i = 0; i < result.length; i++) {
      result[i].createdAt = result[i].createdAt.toLocaleString("en-US", {
        timeZone: "America/New_York",
      });
    }
    if (result) {
      res.json({ result });
    }
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
export default airlineSearchGetReq;
