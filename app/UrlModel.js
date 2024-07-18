import mongoose from "mongoose";

const UrlSchema = mongoose.Schema({
    longUrl:{type:String,required: true},
    shortUrl:{type: String, required:true}
})


export const UrlModel = mongoose.models.url || mongoose.model('url',UrlSchema)