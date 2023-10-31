const products = require("../models/ProductModel");
const store = require('../utils/store')

const addProductData = async (req, res) => {
  try {
    await products.insertMany(store);
    // console.log('Data added successfully');
    res.send("Data added successfully");
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).send("Error adding data to the database");
  }
};



const getAllProducts = async (req, res) => {
  try {
    const data = await products.find({});
    res.json({
      details: data,
      status: 200,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
};

const getAllProductbyID = async (req, res) => {
  const id = req.params.id;
  if (id) {
  const data = products.findOne({ id });
  if (data){
    return res.json({
       details: data,
      status: 200,
    });
  } else {
    res.status(401).json({
      message: error,
      
    });
  }
}
};

const accessories = async (req, res) => {
  try {
    const data = await products.find({ category: "Accessories" });
    console.log('Data:', data);
    res.json({
      details: data,
      status: 200,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
};

const mobile = async (req, res) => {
  try {
    const data = await products.find({ category: "Mobile" });
    res.json({
      details: data,
      status: 200,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
  // const data = await products.find({ category: "Mobile" })
  // res.send(data)
};

const macbook = async (req, res) => {
  try {
    const data = await products.find({ category: "macbook" });
    res.json({
      details: data,
      status: 200,
    });
    
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
};

const laptops = async (req, res) => {
  try {
    const data = await products.find({ category: "laptop" });
    res.json({
      details: data,
      status: 200,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
};

const ipads = async (req, res) => {
  try {
    const data = await products.find({ category: "Ipad" });
    res.json({
      details: data,
      status: 200,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
      status: 401,
    });
  }
};

module.exports = {
  addProductData,
  getAllProducts,
  getAllProductbyID,
  accessories,
  mobile,
  macbook,
  laptops,
  ipads,
};
