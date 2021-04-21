import Category from "../models/Categories";

export const getAllCategories = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const getSingleCategoryById = async (req, res) => {
  const singleCategory = await Category.findById(req.params.id);
  res.status(200).json(singleCategory);
};

export const newCategory = async (req, res) => {
  const { title } = req.body;
  if (title == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    try {
      const newC = new Category({ title });
      await newC.save();
      res.status(201).json("success");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
export const editCategoryById = async (req, res) => {
  const { title } = req.body;
  if (title == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    try {
      await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(200).json("success");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
export const deleteCategoryById = async (req, res) => {
  await Category.findOneAndDelete(req.params.id, { useFindAndModify: false });
  res.status(204).json();
};
