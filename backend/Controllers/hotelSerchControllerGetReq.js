import { HotelUserSchema } from "../Database/auth/HotelSchema.js";
const HotelSerachControolerGetReq = async (req, res) => {
  try {
    const result = await HotelUserSchema.find({
      $or: [{ phonenumber: { $regex: req.params.search } }],
    });
    if (result.length != 0) {
      res.json({ result });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
export default HotelSerachControolerGetReq;
