


const HeroSection = () => {
    return(
        <section id="about" className=" pt-36 pb-32">
<div className="container">
    <div className="flex flex-wrap">
<div className=" w-full px-4 mb-10">
    <h4 className=" font-bold uppercase text-primary text-lg mb-3">About Me</h4>
    <h2 className=" font-bold text-dark text-3xl mb-4 max-w-md ">Septian Adi Nugroho</h2>
    <p className=" font-medium text-base text-secondary max-w-xl">Lulusan D3 dari Universitas Sebelas Maret dengan spesialis bidang Teknik Informatika.Senang belajar hal baru dan 
       berorientasi pada detail serta memiliki aspirasi untuk bekerja di bidang Frontend Web Developer.
       Menguasai pengetahuan html, css, javascript.</p>
</div>
<div className=" w-full px-4">
    <h3 className=" font-semibold text-dark text-2xl mb-4">Contact Me</h3>
    <p className=" font-medium text-base text-secondary mb-6">Addres: Dibal,Ngemplak,Boyolali Regency, Central Java, Indonesia | Phone: +6282136439298</p>

<div className=" flex items-center">
    <a href="https://github.com/SeptianAdi08" target={"_blank"}>
   <ion-icon size="large" name="logo-github"></ion-icon>
    </a>
</div>
</div>

    </div>

</div>

        </section>

    );
}


export default HeroSection

