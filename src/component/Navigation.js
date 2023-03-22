import React from 'react';
import { useState } from 'react';
import Button from './Button';

const Navigation = () =>{
    let Links = [
        {name:"Home", link:"/"},
        {name:"Profile", link:"/"},
        {name:"Projek", link:"/"},
        {name:"Contact", link:"/"},

    ]; 

    let [open,setOpen]=useState(false);
    return(
       <div className=' shadow-md w-full fixed top-0 left-0 z-50'>
         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

            <div className=' font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                <span className=' text-3xl text-indigo-500 mr-1 pt-2'><ion-icon name="rocket-outline"></ion-icon>
             </span>
             Portofolio
            </div>
            <div onClick={() =>setOpen(!open)} 
            className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 
             left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 
            'top-20 opacity-100':'top-[-490px]'} md:opacity-100 `}>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7' >

                            <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
                        </li>

                    ))
                }
                <Button>Get Started</Button>
            </ul>
         </div>
           
        </div>
    );
}

export default Navigation