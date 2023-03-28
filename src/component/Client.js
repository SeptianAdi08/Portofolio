
import Tokopedia from '../styles/img/Client/Tokopedia.png';
import Shopee from '../styles/img/Client/shopee.png';
import Gojek from '../styles/img/Client/Gojek.png';
import BRI from '../styles/img/Client/BRI.png';


const Client = () =>{
   return (
<section id="Client" className=" pt-36 pb-32 bg-slate-700">
<div className=" container">
    <div className=" w-full px-4">
    <div className=" mx-auto text-center mb-16">
                <h4 className=" font-semibold text-lg text-primary mb-2">Fake Client</h4>
                <h2 className=" font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
                <p className=" font-medium  text-secondary md:text-lg">Bagian ini akan menampilkan beberapa hasil Client yang pernah melakukan kerjasama.</p>
            </div>
    </div>
    <div className=" w-full px-4"> 
    <div className=" flex  flex-wrap justify-center items-center">
<a href='#' className=' max-w-[120px] mx-4 py-4 grayscale opacity-60 duration-500
 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
    <img src={Tokopedia} alt="Tokopedia.png"/>
</a>
<a href='#' className=' max-w-[120px] mx-4 py-4 grayscale opacity-60 duration-500
 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
    <img src={Shopee} alt="Tokopedia.png"/>
</a>
<a href='#' className=' max-w-[120px] mx-4 py-4 grayscale opacity-60 duration-500
 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
    <img src={Gojek} alt="Tokopedia.png"/>
</a>
<a href='#' className=' max-w-[120px] mx-4 py-4 opacity-60 duration-500
 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
    <img src={BRI} alt="Tokopedia.png"/>
</a>
    </div>

    </div>
</div>
</section>
    );
}



export default Client;