const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  autor:{type: Schema.Types.ObjectId, ref: 'User'},
  title:{type:String,required:true},
  description:{type:String,required:true},
  rating:{type:Number,required:true},
  photos:{type:String}
});

module.exports = model("Comment", commentSchema);
