import Product from "../models/Product.js"

export const getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.join(products)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getProductById = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.json(product);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req,res) => {
    try{
        const product = new Product({
            name: req.body.name,
            pice: req.body.price,
            description: req.body.description,
            image: req.body.category,
            brand: req.body.brand,
            countInStock: req.body.countInStock,
        });

        const createdProduct = await product.save()
        res.status(201).json(createProduct);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.image = req.body.image || product.image;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.countInStock =
      req.body.countInStock ?? product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};