const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    SKU: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductInventory",
    },
    price: {
      type: Number,
      required: true,
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

// Product category Schema
const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

// Product Inventory Schema
const productInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);

// Discount Schema
const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    discount_percent: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Discount = mongoose.model("Discount", discountSchema);
