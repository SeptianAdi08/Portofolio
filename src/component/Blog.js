



const Blog = () => {
    return(
 <section id="blog" className=" pt-36 pb-32 bg-slate-100">
<div className=" container">
    <div className=" w-full px-4">
    <div className=" max-w-xl mx-auto text-center mb-16">
                <h4 className=" font-semibold text-lg text-primary mb-2 ">Blog</h4>
                <h2 className=" font-bold text-dark text-3xl mb-4 lg:text-5xl">Latest Blog </h2>
                <p className=" font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dicta.</p>
            </div>
    </div>

    <div className=" flex flex-wrap">
        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?programming" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Learning Frontend Web Developer</h3>
            <p className=" font-medium text-secondary text-base mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure praesentium distinctio quibusdam asperiores obcaecati veritatis earum dolorum quasi dicta?</p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
           </div>
            </div>

        </div>

        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?cyber" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Learning Cyber Scurity</h3>
            <p className=" font-medium text-secondary text-base mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus quidem. Facilis, sint similique! Consectetur sapiente eos aspernatur itaque ea.
            </p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
           </div>
            </div>

        </div>

        <div className=" w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className=" bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src="https://source.unsplash.com/360x200?uiux" alt="programing" className=" w-full" />
           <div className=" py-8 px-6">
            <h3 className=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> Learning UI/UX Fundamental</h3>
            <p className=" font-medium text-secondary text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsam itaque eveniet maxime ratione eius ab ad vel nihil quas. </p>
            <a href="#" className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
           </div>
            </div>

        </div>
    </div>
</div>
 </section>
    );
}


export default Blog;