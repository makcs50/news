const { Router } = require("express");
const { newsController } = require("../controllers/News.controller");


const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/pal", newsController.getNewsFromCategories);
router.get("/news/:id", newsController.getNewId);
router.post("/news", newsController.createNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.editNews);

module.exports = router;
