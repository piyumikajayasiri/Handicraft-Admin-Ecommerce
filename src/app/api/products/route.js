// src/app/api/products/route.js
import dbConnect from "../../../utils/dbConnect"; // Assuming you create this utility
import Product from "../../../models/Product";

export async function POST(req) {
  await dbConnect(); // Connect to your database

  try {
    const productData = await req.json(); // Parse the incoming JSON data

    // Create a new product
    const product = await Product.create(productData);

    return new Response(JSON.stringify({ success: true, product }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
