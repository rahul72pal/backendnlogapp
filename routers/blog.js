const express = require("express");
const router = express.Router();

const {dummyLink} = require("../controllers/LikeController");
const { createComment} = require("../controllers/CommentController");

router.get("/dummyrouter" , dummyLink );
router.post("/comment/create" , createComment);

module.exports = router;