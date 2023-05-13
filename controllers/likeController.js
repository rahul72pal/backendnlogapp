

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likepost = async (req , res) =>{
  try{
      const {post , user} = req.body;
      const like = new Like({
        post , user,
      });
      const savedLike = await like.save();

      const updatePost = await Post.findByIdAndUpdate(post , {$push: {likes: savedLike._id}}, {new: true})
      .populate("likes").exec();

      res.json({
        post: updatePost,
      });
  }
  catch(e){
    return res.status(400).json({
        error: "error while fetching the likes",
    });
  }
};

//unlike a post
exports.unlikePost = async (req , res) =>{
   try{
       const {post , like} = req.body;
       const deletedLike = await Like.findOneAndDelete({post:post , _id:like});

       const updatePost = await Post.findByIdAndUpdate(post,
        {$pull: {likes: deletedLike._id} },
        {new: true});

        res.json({
            post: updatePost,
        });
   }

   catch(e){
    return res.status(400).json({
        error: "error while fetching the likes",
    });
   }
}



exports.dummyLink =  (req , res)=>{
    console.log('this is dummu sssakn');
    res.send("<h1> This is dummy page baby </h1>");
};

