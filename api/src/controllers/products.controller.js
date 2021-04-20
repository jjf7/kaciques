import Products from "../models/Products";

export const getAllProducts = async (req, res) => {
  try {
    const count = await Products.estimatedDocumentCount();

    if (count > 0) {
      const data = await Products.find().populate("category", {
        title: 1,
      });

      console.log(data[0].category[0].title);

      let rows = data.map((i) => {
        return {
          id: i._id,
          id_categoria: i.category[0]._id,
          category: i.category[0].title,
          title: i.title,
          price: i.price,
          codebar: i.codebar,
        };
      });
      res.status(200).json(rows);
    } else {
      res.status(200).json([{}]);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const getSingleProductById = async (req, res) => {
  const singleProduct = await Products.findById(req.params.id).populate(
    "category"
  );
  res.status(200).json(singleProduct);
};
export const newProduct = async (req, res) => {
  const { title, price, codebar, category } = req.body;

  if (title == "" || price == "" || codebar == "" || category == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    try {
      const newCategory = new Products({
        title,
        price,
        codebar,
        category,
      });
      await newCategory.save();
      res.status(201).json("success");
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  }
};
export const editProductById = async (req, res) => {
  const { title, price, codebar, category } = req.body;

  if (title == "" || price == "" || codebar == "" || category == "") {
    res.status(500).json("Por favor rellene todos los campos");
  } else {
    console.log(req.body);
    try {
      await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
      }).populate("category");
      res.status(200).json("success");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
export const deleteProductById = async (req, res) => {
  const query = { _id: req.params.id };
  try {
    await Products.findByIdAndRemove(query);
    console.log("Eliminado ID: ", req.params.id);
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
