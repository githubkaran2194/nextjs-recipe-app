import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

// Check if the model already exists before defining it
export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
