import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// the above library allows us to write the aggregation queries 


const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views:{
        type:Number,
        required:true
    },
    isPublished:{
        type:Boolean,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)