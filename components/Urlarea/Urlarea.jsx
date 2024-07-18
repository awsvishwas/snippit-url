'use client'
import React, { useState } from 'react'
import { LuLink2 } from "react-icons/lu";
import { GrLinkBottom } from "react-icons/gr";
import { FaCopy } from "react-icons/fa6";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Urlarea = () => {
  const [longUrl,setLongUrl] = useState(null)
  const [shortUrl,setShortUrl] = useState(null)

  const [message, setMessage] = useState(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setMessage('Copied!');
    } catch (err) {
      setMessage('Failed to copy to clipboard.');
    }
  };

  const onChangeHandler=(e)=>{
    const value = e.target.value
    setLongUrl(value)
    console.log(longUrl)
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.post('/api/create',{longUrl})
      if(response.data.shortUrl){
      toast.success(response.data.msg)
      setLongUrl(null)
      setShortUrl(response.data.shortUrl)
      }
      else{
        toast.error(response.data.msg)
        
      }

    }catch(error){
      toast.warning('Something Unexpected happened!!')
    }

  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <ToastContainer/>
    <form className='flex my-10 mx-auto rounded-sm bg-[#e4e7ea] w-full lg:max-w-[740px]' onSubmit={onSubmitHandler}>

        <div className='items-center justify-between px-3 py-1 bg-transparent text-gray-500 hidden lg:flex '>
        <LuLink2 size={40}/>
        </div>
        <input type="text" 
        className='w-[260px] lg:w-[560px] bg-transparent outline-none h-[30px] lg:h-[60px] px-3
        text-gray-800 lg:text-[16px] text-[10px]' 
        placeholder='Paste the Url here....' 
        onChange={onChangeHandler} required/>
        <button 
        className='bg-[#294e83] w-[160px] border-r-0 rounded-sm h-[30px] lg:h-[60px] 
        flex gap-2 items-center justify-center text-[#e4e7ea] lg:text-[16px] text-[12px] hover:bg-[#294389]'
        type='submit'>
            Create <GrLinkBottom /></button>
    </form>
    <div className='flex flex-col lg:flex-row text-white' >
      
      {shortUrl!==null && <div className='flex my-1 mx-auto text-[10px] lg:text-[16px] text-white '> 
      <div className='px-2 py-2 border-slate-[200] border-[1px] rounded-l-md'>
      Shortened URL
      </div>
      <p className='px-4 py-2 border-[1px] border-slate-200  border-x-0'>{shortUrl}</p>
      <div className='flex items-center justify-center px-3 border-[1px] border-slate-200 rounded-r-md text-gray-500'>
        <FaCopy onClick={copyToClipboard} className='cursor-pointer hover:text-white'/>
      </div></div>}
      {message!==null && <p className='px-4 py-2 text-center'>{message}</p>}
     
    </div>
    </div>
  )
}

export default Urlarea
