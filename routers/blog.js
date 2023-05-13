const express = require("express");
const router = express.Router();

const {dummyLink , likepost , unlikePost} = require("../controllers/LikeController");
const { createComment} = require("../controllers/CommentController");
const { createPost , getAllPosts} = require("../controllers/PostController");

router.get("/dummyrouter" , dummyLink );
router.post("/comment/create" , createComment); 
router.post("/posts/create", createPost);
router.get("/allposts/create", getAllPosts);
router.post("/likes/like" , likepost);
router.post("/likes/unlike" , unlikePost);

module.exports = router;