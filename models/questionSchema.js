import mongoose from 'mongoose';
const {Schema}= mongoose;

//questions Model
const questionModel= new Schema({
  questions:{type:Array,default:[]},
  answers:{type:Array,default:[]},
  createdAt:{type:Date,default:Date.now}
});

//export const Questions=mongoose.model("Questions",questionModel);
export default mongoose.model('Questions',questionModel)