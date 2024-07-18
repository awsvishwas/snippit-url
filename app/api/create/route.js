import { connectDB } from "@/app/db";
import { NextResponse,NextRequest } from "next/server";
import { UrlModel } from "@/app/UrlModel";
import { nanoid } from "nanoid";

const loadDB = async()=>{
    try{
        await connectDB()
    }
    catch(error){
        console.log('DB Connection Failed.');
    }
}

loadDB()

export async function GET(request){

    return NextResponse.json({msg:'Connection Established!!!'})
}

export async function POST(request){
    try{
    const {longUrl} = await request.json()
    const shortId = nanoid(6)
    const shortUrl = `http://localhost:3000/api/${shortId}`
    await UrlModel.create({longUrl,shortUrl})
    return NextResponse.json({msg: 'Success. Short Url Generated.',shortUrl: shortUrl})
    }
    catch(error){
        return NextResponse.json({msg: 'Falied POST Operation.'})
    }
}