import { connectDB } from "@/app/db";
import { UrlModel } from "@/app/UrlModel";
import { NextResponse } from "next/server";

const loadDB = async()=>{
    try{
        await connectDB()
    }
    catch(error){
        console.log('DB Connection Failed.');
    }
}

loadDB()

export async function GET(req,{params}){
  const {shortId} = params
  if(shortId){
  try{
  const shortUrlString = `http://localhost:3000/api/${shortId}`
  const findUrl = await UrlModel.findOne({shortUrl: shortUrlString})
  

  return NextResponse.redirect(findUrl.longUrl)
  }
  catch(error){
    return NextResponse.json({msg:'Error while Redirecting to requested Url. Try again later.'})
  }
  }
  else{
    return NextResponse.json({msg: 'Short Url Invalid!!!'})
  }
}