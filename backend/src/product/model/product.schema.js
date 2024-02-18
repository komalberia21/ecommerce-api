import { timeStamp } from "console";
import mongoose from "mongoose";

const producSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
      trim: true,
    },
  quantity: {
      type: Number,
      required: [true, "product stock is mandatory"],
      maxLength: [5, "stock can be maximum 5 digits"],
      default: 1,
    },
  });

const ProductModel = mongoose.model("Product", producSchema);
export default ProductModel;
