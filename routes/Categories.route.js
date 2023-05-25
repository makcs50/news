const { Router } = require("express");
const { categoriesController } = require("../controllers/Categories.controller");

// routes
// news.route.js

const router = Router();

router.get("/categories", categoriesController.getCategories);
router.post("/categories", categoriesController.createCategories);
router.delete("/categories/:id", categoriesController.deleteCategories);

module.exports = router;