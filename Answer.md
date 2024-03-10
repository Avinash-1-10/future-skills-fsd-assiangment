# Questions

### 1)  Explain the relationship between the "Product" and "Product_Category" entities from the above diagram

In the provided schemas, there is a relationship established between the "Product" and "ProductCategory" entities through the `category_id` field in the "Product" schema. This field holds a reference to the `_id` field of documents in the "ProductCategory" collection.

In MongoDB, this is akin to a foreign key relationship in relational databases. When you query a product, you can populate the `category_id` field to retrieve the details of the corresponding product category.

### 2) How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure that each product in the "Product" table has a valid category assigned to it, you can use Mongoose middleware functions, specifically the `pre` hook, to validate the category before saving a new product. Here's how you could implement it:

```javascript
productSchema.pre('save', async function(next) {
  try {
    const categoryExists = await ProductCategory.exists({ _id: this.category_id });
    if (!categoryExists) {
      throw new Error('Invalid category assigned to product');
    }
    next();
  } catch (error) {
    next(error);
  }
});
