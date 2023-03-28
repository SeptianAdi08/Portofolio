import React from "react";
import vegetable from '../styles/img/vegetable.png';
import portofolio from '../styles/img/portofolio.png';




const Projek = () => {
    return(
<section id="portofolio" className="pt-36 pb-16 bg-slate-100">
    <div className="container">
        <div className=" w-full px-4">
            <div className=" max-w-xl mx-auto text-center mb-16">
                <h4 className=" font-semibold text-lg text-primary mb-2 ">Portofolio</h4>
                <h2 className=" font-bold text-dark text-3xl mb-4 lg:text-5xl">Projek Baru</h2>
                <p className=" font-medium text-secondary md:text-lg">Bagian ini akan menampilkan beberapa hasil projek terbaru, untuk melengkapi website portofolio ini.</p>
            </div>
        </div>

        <div className=" w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
             <div className=" mb-12 p-4 md:w-1/2">
                <div className=" rounded-md shadow-md overflow-hidden">
                    <img src={vegetable} alt="Porotfolio.png" />
                </div>
                <h3 className=" font-semibold text-dark text-xl mt-5 mb-3">Vegetable Shop</h3>
                <p className=" font-medium text-base text-secondary">Vegetable Shop ini menampilkan bahan masakan. vegetable shop ini di buat menggunakan html,css dan javascript</p>
             </div>
             <div className=" mb-12 p-4 md:w-1/2">
                <div className=" rounded-md shadow-md overflow-hidden">
                    <img src={portofolio} alt="Vegetable png"/>
                </div>
                <h3 className=" font-semibold text-dark text-xl mt-5 mb-3">Portofolio website</h3>
                <p className=" font-medium text-base text-secondary">Portofolio Website ini menampilkan profile dan 
                projek yang pernah saya buat menggunakan ReactJs dan Tailwind</p>
             </div>
        </div>
    </div>
    
</section>
    );
}



export default Projek