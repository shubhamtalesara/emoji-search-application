import React from 'react'
import { useState } from 'react';
import EmojiList from "./EmojiList";



export default function SearchBar() {
    const [message, setMessage]= useState("")
    const handleChange= (e)=>{
      setMessage(e.target.value)
    }
  return (
    <div>
      <input type="text" value={message} onChange={handleChange}/>
      <EmojiList value={message}/>
    </div>
  )
}
