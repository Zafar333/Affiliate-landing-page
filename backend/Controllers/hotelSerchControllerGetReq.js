import { HotelUserSchema } from "../Database/auth/HotelSchema.js";
const HotelSerachControolerGetReq = async (req, res) => {
  try {
    const result = await HotelUserSchema.find({
      $or: [{ phonenumber: { $regex: req.params.search } }],
    }).lean();
    for (let i = 0; i < result.length; i++) {
      result[i].createdAt = result[i].createdAt.toLocaleString("en-US", {
        timeZone: "America/New_York",
      });
    }
    if (result.length != 0) {
      res.json({ result });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
export default HotelSerachControolerGetReq;
