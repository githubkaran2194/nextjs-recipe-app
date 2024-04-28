import { NextResponse } from "next/server";
import {Product} from '../../../model/productSchema'
import mongoose from "mongoose";

export async function GET(req){
    let data;
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/recipe-app");
    data = await Product.find();
    console.log("connected to mongodb")
    console.log(data)
  } catch (e) {
    console.log("mongodb is not connected", e)
  }
  return NextResponse.json({
    success: "success",
    data: data
  })
}


export async function POST(req) {
    let data = await req.json();
    await mongoose.connect("mongodb://127.0.0.1:27017/recipe-app")
    const product = new Product(data)
    const result = await product.save()
    return NextResponse.json({
      success: "success",
      result: result
    })
  }