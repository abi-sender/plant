import Cart from "../model/Cart.js";

// Add Cart
export const addCart = async (req, res) => {
  try {
    const { productId, title, name, image, price } = req.body;

    const product = await Cart.findOne({ productId });

    if (product) {
      product.qty += 1;
      await product.save();

      return res.json(product);
    }

    const newCart = await Cart.create({
      productId,
      title,
      name,
      image,
      price,
      qty: 1,
    });

    res.status(201).json(newCart);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();

    res.json(cart);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Increase Qty
export const increaseQty = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    item.qty += 1;

    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Decrease Qty
export const decreaseQty = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (item.qty > 1) {
      item.qty -= 1;
      await item.save();
    }

    res.json(item);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Item
export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Removed",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};