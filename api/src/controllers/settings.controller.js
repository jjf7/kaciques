import Settings from "../models/Settings";

export const getSingleSettingById = async (req, res) => {
  const single = await Settings.find();
  res.status(200).json(single);
};

export const editSettingById = async (req, res) => {
  try {
    const updated = await Settings.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false})
    res.status(200).json('success')
  } catch (error) {
     res.status(500).json(error) 
  }
};
