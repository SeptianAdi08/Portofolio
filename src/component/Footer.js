



const Footer =  () => {

    return(
        <section id="Contact" className="pb-12 pt-24 bg-dark">
            <div className="container">
               
          <div className=" flex flex-wrap">
            <div className=" w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                <h2 className=" font-bold text-4xl text-white mb-5">SEPTIAN ADI NUGROHO</h2>
                <h3 className=" font-bold text-2xl mb-2">Contact Me</h3>
                <p>adinugrohosep@gmail.com</p>
                <p>Boyolali,Jawa Tengah</p>
            </div>
            <div className=" w-full px-4 mb-12 md:w-1/3">
                <h3 className=" font-semibold text-xl text-white mb-5">Writing Category</h3>

                <ul className=" text-slate-300">
                    <li>
                        <a href="#" className=" inline-block text-base hover:text-primary mb-3 ">Programing</a>
                    </li>
                    <li>
                        <a href="#" className=" inline-block text-base hover:text-primary mb-3 ">Teknologi</a>
                    </li>
                    <li>
                        <a href="#" className=" inline-block text-base hover:text-primary mb-3 "> Web Desain</a>
                    </li>
                </ul>
            </div>
            <div className=" w-full px-4 mb-12 md:w-1/3">
                <h3 className=" font-semibold text-xl text-white mb-5">Links</h3>

                <ul className=" text-slate-300">
                    <li>
                        <a href="#" className=" inline-block text-base hover:text-primary mb-3 ">Beranda</a>
                    </li>
                    <li>
                        <a href="#Home" className=" inline-block text-base hover:text-primary mb-3 ">About Me</a>
                    </li>
                    <li>
                        <a href="#Portofolio" className=" inline-block text-base hover:text-primary mb-3 ">Portofolio</a>
                    </li>
                    <li>
                        <a href="#Client" className=" inline-block text-base hover:text-primary mb-3 ">Client</a>
                    </li>
                    <li>
                        <a href="#Blog" className=" inline-block text-base hover:text-primary mb-3 ">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="w-full pt-10 border-t border-slate-700">
            <div className=" flex items-center justify-center mb-5">
    <a href="https://github.com/SeptianAdi08" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-github" className=" fill-current"></ion-icon>
    </a>

    <a href="https://www.linkedin.com/in/septian-adi-n-786b80239/" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-linkedin" className=" fill-current"></ion-icon>
    </a>

    <a href="https://api.whatsapp.com/send/?phone=6282136439298&text&type=phone_number&app_absent=0" target={"_blank"} className=" w-9 h-9 mr-3 rounded-full
     flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
   <ion-icon  name="logo-whatsapp" className=" fill-current"></ion-icon>
    </a>
</div>
<p className=" font-medium text-sm text-slate-500 text-center">Septian Adi Nugroho|CSS 3</p>

            </div>
          </div>
                    
                </div>
            

        </section>
    );
}

export default Footer;