


const HeroSection = () => {
    return(
        <section id="about" className=" pt-36 pb-32">
<div className="container">
    <div className="flex flex-wrap">
<div className=" w-full px-4 mb-10 lg:w-1/2">
    <h4 className=" font-bold uppercase text-primary text-lg mb-3">About Me</h4>
    <h2 className=" font-bold text-dark text-3xl mb-4 max-w-md lg:text-4xl ">Septian Adi Nugroho</h2>
    <p className=" font-medium text-base text-secondary max-w-xl lg:text-lg">Lulusan D3 dari Universitas Sebelas Maret dengan spesialis bidang Teknik Informatika.Senang belajar hal baru dan 
       berorientasi pada detail serta memiliki aspirasi untuk bekerja di bidang Frontend Web Developer.
       Menguasai pengetahuan html, css, javascript.</p>
</div>
<div className=" w-full px-4 lg:w-1/2">
    <h3 className=" font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Contact Me</h3>
    <p className=" font-medium text-base text-secondary mb-6">Addres: Dibal,Ngemplak,Boyolali Regency, Central Java, Indonesia | Phone: +6285293329150</p>

<div className=" flex items-center">
    <a href="https://github.com/SeptianAdi08" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-github" className=" fill-current"></ion-icon>
    </a>

    <a href="https://www.linkedin.com/in/septian-adi-n-786b80239/" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-linkedin" className=" fill-current"></ion-icon>
    </a>

    <a href="https://api.whatsapp.com/send/?phone=6285293329150&text&type=phone_number&app_absent=0" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-whatsapp" className=" fill-current"></ion-icon>
    </a>
</div>
</div>

    </div>

</div>

        </section>

    );
}


export default HeroSection

