import { HotelUserSchema } from "../Database/auth/HotelSchema.js";

const hotelUsersControllerGetReq = async (req, res) => {
  try {
    var result = await HotelUserSchema.find().lean();
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
export default hotelUsersControllerGetReq;
