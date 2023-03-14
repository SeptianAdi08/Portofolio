import React from 'react';
import '../styles/style.css';
import gambar from'../septian.png';

const Home =  () => {

    return(
     <section id="Home" className=' pt-36'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className=' w-full self-center px-4 lg:w-1/2'>
                    <h1 className=' text-base font-semibold text-primary md:text-xl '>Hallo 🙌 Nama Saya 
                    <span className=' block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Septian Adi Nugroho</span></h1>
                    <h2 className=' font-medium text-secondary text-lg mb-5 lg:text-2xl'>Saya Tertarik di Front End Web Developer</h2>
                    <p className=' font-medium text-secondary mb-10 leading-relaxed'>Lulusan D3 dari Universitas Sebelas Maret dengan spesialis 
                        bidang Teknik Informatika.</p>

                        <a href='#' className=' text-base font-semibold py-3 px-8
            text-white bg-primary rounded-full hover:shadow-lg hover:bg-[#60a5fa] transition duration-300 ease-in-out'>Contact Me</a>
           </div>
           
           <div className=' w-full self-end px-4 lg:w-1/2'>
            <div className=' mt-10 relative lg:mt-9 lg:right-0'>
                <img src = {gambar} alt="Fotoprofile" className=' max-w-full mx-auto' />
                <span className=' absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                    <svg width={300} height={300} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#3B82F6" d="M65.4,-51.3C80.9,-32.7,87,-5.7,79.2,13.9C71.3,33.5,49.7,45.8,
  27.8,55.4C6,65,-16,72,-34,65.3C-52,58.7,-65.9,38.5,-66.7,19.6C-67.5,0.7,-55.2,-16.7,-41.9,
  -34.8C-28.6,-52.9,-14.3,-71.5,5.3,-75.8C25,-80,49.9,-69.9,65.4,-51.3Z" transform="translate(100 100)" scale={1.2} />
</svg>
</span>
            </div>
           </div>

            </div>
        </div>
     </section>

       
    );
}




export default Home

