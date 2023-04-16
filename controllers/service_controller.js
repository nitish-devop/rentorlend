const Product = require("../models/Product");
const Request = require("../models/Request");

// handle single product renting
module.exports.rent = async function (req, res) {
  // fetch product with populated document of refrence
  // find product with given id and full detail of  owner and all reviews and their writers
  try {
    const product = await Product.findById({ _id: req.params.id })
      .populate("user")
      .populate({
        path: "reviews",
        populate: {
          path: "user",
        },
      });

    return res.render("rent", {
      title: "Rent | RentOrLend",
      product,
    });
  } catch (err) {
    console.log(err);
    return;
  }
};

// render page for lend tab
module.exports.lend = function (req, res) {
  return res.render("lend", {
    title: "Lend | RentOrLend",
  });
};

// render page for request tab
module.exports.request = async function (req, res) {
  const requests = await Request.find().populate("user");
  console.log(requests);
  return res.render("request", {
    title: "Request | RentOrLend",
    requests,
  });
};
