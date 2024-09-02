

// sm:  >640px
// md:  >768px
// lg:  >1024px
// xl:  >1280px
// 2xl: >1536px


const SectionAboutMe = () => {
  return (
    <section id="about-me" className="about-me px-16 pt-16 pt-16 lg:pt-44">
        <h3 className="text-blue-100 text-center font-semibold text-3xl">About me</h3>
        <p className="gtkm text-center font-bold text-sm mb-6">Get to know me</p>
        <p className="text-gray-300 text-center lg:mx-16 xl:mx-32 2xl:mx-80">Hi there! I'm Jeremias Quinteros, a Fullstack Developer with a strong drive for creating efficient, user-friendly web applications. Over the past few years, I’ve honed my skills through a variety of projects, gaining hands-on experience with both frontend and backend technologies.
        </p>
        <br />
        <p className="text-gray-300 text-center lg:mx-16 xl:mx-32 2xl:mx-80">My approach is always professional, and I strive to meet all technical requirements while ensuring that projects deliver real value. I enjoy tackling challenges and finding creative solutions to complex problems.
        </p>
        <br />
        
        <p className="text-gray-300 text-center lg:mx-16 xl:mx-32 2xl:mx-80">I'm excited to bring my expertise to a dynamic team where I can contribute to meaningful projects and continue to grow as a developer. If you're looking for someone who is dedicated, adaptable, and ready to make an impact, let's connect!</p>
        <br />
        <div className="flex justify-center">
            <a target="_blank" href="https://drive.google.com/uc?export=download&id=1jjNZ6VJIMRwkJ18C83zaBBnjthRFYOV8" download="CV_Jeremias Quinteros.png" className="text-blue-50 rounded-full border-blue-500 border-2 py-3 px-4 hover:bg-blue-500 transition-all">Download Resume</a>
        </div>
    </section>
  )
}

export default SectionAboutMe