import { HotelUserSchema } from "../Database/auth/HotelSchema.js";

const hotelUsersControllerGetReq = async (req, res) => {
  try {
    var result = await HotelUserSchema.find();
    res.json({ status: "200", result });
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
export default hotelUsersControllerGetReq;
