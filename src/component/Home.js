import React from 'react';
import '../styles/style.css';
import gambar from'../septian.png';

const Home =  () => {

    return(
        <div className=" h-screen">
            <div className=' flex justify-items-center justify-between gap-4 content-center pl-5 w-full self-center ' >

           <div className=' pt-36'>
              <h1 className=' text-base font-semibold text-indigo-500 mt-1'>Haloo Saya Adalah
              <span className=' block font-bold text-black text-4xl'>Septian Adi Nugroho</span></h1>
              <h2 className=' font-medium text-lg mb-5 text-black'>Saya Tertarik Menjadi Frontend Web Developer</h2>
              <p className=' font-medium text-slate-400 mb-10'>Lulusan D3 dari Universitas Sebelas Maret dengan spesialis bidang Teknik Informatika.Senang belajar hal baru dan berorientasi pada detail serta
                 memiliki aspirasi untuk bekerja di bidang Frontend Web Developer. Menguasai pengetahuan html, css, javascript.</p>
           <a href='#' className=' text-base font-semibold py-3 px-8
            text-white bg-[#3b82f6] rounded-full hover:shadow-lg hover:bg-[#60a5fa] transition duration-300 ease-in-out'>Contact Me</a>
           </div>

           <div className=' w-full self-end px-6'>
            <div className=' mt-10'>
                <img src = {gambar} alt="Fotoprofile"/>
            </div>
           </div>

           </div>
        </div>
    );
}




export default Home

