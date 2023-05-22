import { airlineUserSchema } from "../Database/auth/UserSchema.js";

const allUserdataGetREq = async (req, res) => {
  try {
    var result = await airlineUserSchema.find().lean();
    // console.log("result", result);
    // console.log("date", result[0].createdAt.toLocaleString());
    for (let i = 0; i < result.length; i++) {
      result[i].createdAt = result[i].createdAt.toLocaleString("en-US", {
        timeZone: "America/New_York",
      });
    }
    res.json({ status: "200", result });
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
export default allUserdataGetREq;
