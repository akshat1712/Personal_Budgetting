const express = require("express");
const router = express.Router();

const { getTransactions, AddTransactions, deleteTransactions } = require("../controllers/transactionController");

router
    .route("/")
    .get(getTransactions)
    .post(AddTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);
    
module.exports = router;
