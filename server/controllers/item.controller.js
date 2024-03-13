const Item = require("../database-mongo/Item.model");

module.exports = {
    // Read All
    findAllItems: (req, res) => {
        Item.find()
        .then((Items) => {
            res.json(Items);
        })
        .catch(err => {
            res.json(err);
        });
    },

    // Read One 
    findOneSingleItem:(req, res) => {
        Item.findOne({ _id: req.params.id })
        .then((oneSingleItem) => {
            res.json(oneSingleItem);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Create 
    createNewItem: (req, res) => {

        Item.create(req.body)
            .then((newlyCreatedItem) => {
                res.status(200).json(newlyCreatedItem);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Update 
    updateExistingItem: (req, res) => {
        Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedItem) => {
            res.json(updatedItem);
            console.log(req.param.id);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Delete 
    deleteItemWithId: (req, res) => {
        Item.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};


























// // DELETE THIS LINE


// // UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// // const db = require("../database-mysql");
// // const Item = require('../database-mongo/Item.model.js');

// // UNCOMMENT IF USING MYSQL WITH CALLBACKS
// // const selectAll = function (req, res) {
// //   db.query("SELECT * FROM items", (err, items, fields) => {
// //     if (err) {
// //       res.status(500).send(err);
// //     } else {
// //       res.status(200).send(items);
// //     }
// //   });
// // };

// // UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// // UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// // const selectAll = async function (req, res) {
// //   try {
// //     const items = await Item.find({});
// //     res.status(200).send(items);
// //   } catch (error) {
// //     res.status(200).send(error);
// //   }
// // };

// module.exports = { selectAll };
