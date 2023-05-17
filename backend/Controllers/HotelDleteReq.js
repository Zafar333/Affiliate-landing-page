import { HotelUserSchema } from "../Database/auth/HotelSchema.js";
export const HoteldeleteReq = async (req, res) => {
  let id = req.params.delete;
  try {
    let result = await HotelUserSchema.findByIdAndDelete({ _id: id });
    if (result) {
      res.json({ msg: "Your data is deleted", status: 200 });
    } else {
      res.json({ msg: "Something went wrong" });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
