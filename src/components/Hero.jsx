import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center item-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src ={logo} alt ="sumz_logo"
             className='w-28 object-contain'/>
            <button type="button"
             onClick={()=> window.open('https://www.google.com/')}
             className='black_btn'>
                Github
             </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span 
            className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Bored while learning all the lengthy articles? <br />
            <br />
            Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries with the help of new OpenAi's ChatGPT-4
        </h2>
    </header>
  )
}

export default Hero