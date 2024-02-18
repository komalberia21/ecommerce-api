import ProductModel from "./product.schema.js";

export const addNewProductRepo = async (product) => {
  return await new ProductModel(product).save();
};

export const getAllProductsRepo = async () => {
  return await ProductModel.find({});
  };

export const updateProductRepo = async (res,_id,updateNumber) => {
  try {
    // Find the product by ID
    const product = await ProductModel.findById(_id);
   if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    product.quantity += updateNumber;
    await product.save();
    return product;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const deleProductRepo = async (_id) => {
  return await ProductModel.findByIdAndDelete(_id);
};


