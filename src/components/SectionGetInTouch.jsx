import React from 'react'

// sm:  >640px
// md:  >768px
// lg:  >1024px
// xl:  >1280px
// 2xl: >1536px

const SectionGetInTouch = () => {

    const onSubmit = async (event) => {
        const btn = document.getElementById('btn-git');
    
        event.preventDefault();
        const formData = new FormData(event.target);
        
        formData.append("access_key", "08ba3ce4-d2cc-4793-9f83-a286e065d3dc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        btn.style.color = 'green';
        btn.innerHTML = 'Thanks!'
        event.target.reset()
      };

      
      const changeColor = ()=>{
        const btn = document.getElementById('btn-g');
        btn.style.color = 'green';
        btn.innerHTML = 'Thanks!'
      }

  return (
    <section id='contact-me' className='mx-10 text-white pt-16 inter font-normal 2xl:mx-40'>
        <h3 className="skills text-center text-blue-200 font-semibold text-3xl mt-10 lg:mt-24">
        Get In Touch
      </h3>
      <p className="gtkm text-center font-bold text-sm mb-6">Lets work together</p>

      <form action="#" onSubmit={onSubmit} className='flex flex-col lg:mx-20 xl:mx-80 2xl:mx-96'>
        <label className='mb-2' htmlFor="name">Name</label>
        <input className='rounded-md bg-transparent border-2 py-2 px-2 mb-2  ' type="text" name='name' id='name' required />

        <label className='mb-2' htmlFor="email">Email</label>
        <input className='rounded-md bg-transparent border-2 py-2 px-2 mb-2' type="email" id='email' name='email' required />

        <label className='mb-2' htmlFor="message">Message</label>
        <textarea className='rounded-md bg-transparent border-2 py-2 px-2 mb-8 h-52 leading-tight resize-none ' name='message' required id="message"></textarea>
        {/* <input className='rounded-md bg-transparent border-2 py-2 px-2 mb-8 h-52 leading-tight' type="text" /> */}

        <button id='btn-git' className='bg-slate-200 text-black font-medium py-3 rounded-md lg:mx-64 xl:mx-0' type='submit'>Get in Touch</button>
      </form>

      {/* <button id='btn-git' onClick={changeColor} className='bg-slate-200 text-black font-medium py-3 rounded-md lg:mx-64 xl:mx-0'>Get in touch 2</button> */}
    </section>
  )
}

export default SectionGetInTouch