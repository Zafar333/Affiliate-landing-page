import { HotelUserSchema } from "../Database/auth/HotelSchema.js";
export const hotelUpdateReq = async (req, res) => {
  var id = req.params.id;
  var edit = req.body;
  var result = await HotelUserSchema.updateOne({ _id: id }, { $set: req.body });
  try {
    if (result) {
      res.json({ msg: "Your data is updated successfully", status: 200 });
    } else {
      res.json({ msg: "Data is not update", status: 401 });
    }
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
