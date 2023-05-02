const Post = require("../models/postModel");
const Comment = require("../models/commentModel");



exports.createComment = async (req , res) => {
    try{
        //fetch data from req body
        const {post , user , body} = req.body;
        
        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save new comment into data base
        const savedComment = await comment.save();

        //find the post by ID , add the new comment to its comment array
        const updatePost = await Post.findByIdAndUpdate(post , {$push: {comment: savedComment._id } } , {new: true} )
        .populate("comments")
        .exec();


        res.json({
            post: updatePost,
        });
        // res.send('')

    }
    catch(e){
      return res.status(500).json({
        error: "eorororr"
      }); 
    }
}