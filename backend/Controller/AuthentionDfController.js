const express = require("express");
const Produc = require("./../Model/produc");
const User = require("./../Model/authen");
const addCard = require("../Model/addCart");
const size = require("../Model/size");
const sample = require("../Model/sample");

const { default: mongoose } = require("mongoose");

const { jwtDecode } = require("jwt-decode");

class AuthentionDfController {
  // async addcart(req, res) {
  //   const {
  //     userId,
  //     productId,
  //     quantity,
  //     title,
  //     codeProduct,
  //     maSize,
  //     imgProduct,
  //   } = req.body;
  //   let cart = await addCard.findOne({
  //     userId: userId,
  //   });
  //   const productDetails = await Produc.findById(productId).populate(
  //     "samples_id"
  //   );
  //   try {
  //     if (cart) {
  //       let indexFound = cart.products.findIndex(
  //         (p) => p.productId == productId
  //       );
  //       // not in cart < 1 available in cart > 1
  //       if (indexFound != -1) {
  //         const insxs = cart.products[indexFound];
  //         insxs.quantity = cart.products[indexFound].quantity += 1;
  //         insxs.price = insxs.price * insxs.quantity;
  //         insxs.codeProduct = codeProduct;
  //         insxs.maSize = maSize;
  //       } else if (quantity > 0) {
  //         cart.products.push({
  //           productId: productId,
  //           title: title,
  //           codeProduct: codeProduct,
  //           maSize: maSize,
  //           imgProduct: imgProduct,
  //           quantity: quantity,
  //           price: productDetails.price,
  //         });
  //       } else {
  //         return res.status(400).json({
  //           code: 400,
  //           message: "Invalid request",
  //         });
  //       }
  //       cart = await cart.save();
  //     } else {
  //       const newCart = await addCard({
  //         userId: userId,
  //         products: [
  //           {
  //             productId: productId,
  //             quantity: quantity,
  //             codeProduct: codeProduct,
  //             maSize: maSize,
  //             imgProduct: imgProduct,
  //             price: productDetails.price,
  //             title: productDetails.title,
  //           },
  //         ],
  //       });
  //       newCart.save();
  //       return res.status(201).send(newCart);
  //     }
  //     return res.status(200).send({
  //       code: 200,
  //       message: "Add to Cart successfully!",
  //       data: cart,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async cartsst(req, res) {
    const {
      userId,
      productId,
      quantity,
      title,
      codeProduct,
      maSize,
      imgProduct,
    } = req.body;
    try {
      const cart = await addCard.findOne({ userId: userId });
      const productDetails = await Produc.findById(productId);
      const quantitySize = await size
        .findOne({ producId: productId })
        .populate("sizeId");
      if (cart) {
        let itemIndex = cart.products.findIndex(
          (p) => p.productId == productId
        );
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          productItem.quantity += 1;
          cart.products[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
          cart.products.push({
            productId: productId,
            quantity: quantity,
            title: title,
          });
        }
        await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await addCard.create({
          userId,
          products: [
            {
              productId: productId,
              quantity: quantity,
              codeProduct: codeProduct,
              maSize: maSize,
              imgProduct: imgProduct,
              price: productDetails.price,
              title: productDetails.title,
            },
          ],
        });

        return res.status(201).send(newCart);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "err sever",
      });
    }
  }
}

module.exports = new AuthentionDfController();
