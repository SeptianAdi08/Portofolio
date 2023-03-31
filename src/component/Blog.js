



const Blog = () => {
    return(
 <section id="blog" className=" pt-36 pb-32 bg-slate-100">
<div className=" container">
    <div className=" w-full px-4">
    <div className=" max-w-xl mx-auto text-center mb-16">
                <h4 className=" font-semibold text-lg text-primary mb-2 ">Blog</h4>
                <h2 className=" font-bold text-dark text-3xl mb-4 lg:text-5xl">Blog Terkini</h2>
                <p className=" font-medium text-secondary md:text-lg">Bagian ini akan menampilkan beberapa hasil Blog terbaru,
                 untuk melengkapi website portofolio ini.</p>
            </div>
    </div>

    <div className=" flex flex-wrap">
        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?programming" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Belajar Frontend Web Developer</h3>
            <p className=" font-medium text-secondary text-base mb-6">Front End Developer merupakan salah satu posisi pekerjaan yang paling banyak diminati oleh perusahaan di Indonesia.</p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya di sini..</a>
           </div>
            </div>

        </div>

        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?cyber" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Belajar Cyber Scurity</h3>
            <p className=" font-medium text-secondary text-base mb-6">HACKER di Indonesia memang memiliki konotasi yang negatif. Keahlian meretas dan membobol..
            </p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya di sini..</a>
           </div>
            </div>

        </div>

        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?uiux" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Belajar Dasar UI/UX</h3>
            <p className=" font-medium text-secondary text-base mb-6">lowongan pekerjaan sebagai UI/UX Designer dalam satu tahun terakhir ada sekitar 6.800. Itu hanya data dari UI/UX Designer saja, </p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya di sini..</a>
           </div>
            </div>

        </div>
    </div>
</div>
 </section>
    );
}


export default Blog;