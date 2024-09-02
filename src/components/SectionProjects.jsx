import React from "react";
import screenRoutine from "../assets/routine-screen.png";
import screenShop from "../assets/shop-screen.png";
import screenTodo from "../assets/todo-screen.png";
import screenBurguer from "../assets/burguer-screen.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import screenRepo from '../assets/Ecom-screen.png'

const SectionProjects = () => {
  return (
    <section id="projects" className="pt-16">
      <h3 className="skills text-center text-blue-200 font-semibold text-3xl pt-10 lg:mt-24">
        Projects
      </h3>
      <p className="gtkm text-center font-bold text-sm mb-6">Some of my Work</p>
      <div className=" flex justify-center flex-wrap ">
        {/*  */}



        <div id="cont-project" className="bg-projects w-80 border-2 border-gray-700 rounded-lg m-3 h-auto">
          <img className="img-project rounded-t-lg h-2/5 w-full" src={screenRoutine} alt="" />
          <div className="cont-info-project flex h-3/5">
            <div className=" w-4/5 pl-2">
              <h4 className="skills text-gray-400">MyRoutine</h4>
              <p className="skills text-sm text-gray-400 mb-2">App to quickly organize your day based on the time and the things you need to do.</p>
              <div className="flex flex-wrap text-white">
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">React</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">DndKit</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Node</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Express</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">MySQL</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Railway</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Firebase</label>
              </div>
            </div>
            <div className="text-white w-1/5 flex items-end justify-end m-2 ">
                <a target="_blank" href="https://my-routine-two.vercel.app/??"><OpenInNewIcon/></a>
            </div>
          </div>
        </div>





        <div id="cont-project" className="bg-projects w-80 border-2 border-gray-700 rounded-lg m-3 h-auto">
          <img className="img-project rounded-t-lg h-2/5 w-full object-cover" src={screenRepo} alt="" />
          <div className="flex  h-3/5">
            <div className=" w-3/4 pl-2">
              <h4 className="skills text-gray-400">Ecommerce's Backend</h4>
              <p className="skills text-sm text-gray-400 mb-2">Backend that provides authentication, catalog, and various services. </p>
              <div className="flex flex-wrap text-white">
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Node</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Express</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Auth</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">MongoDB</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Cookies</label> 
                
              </div>
            </div>
            <div className="text-white w-1/4 flex items-end justify-end m-2 h-2/2">
                <a target='_blank' href="https://github.com/JereDev8/Ecommerce"><OpenInNewIcon/></a>
            </div>
          </div>
        </div>




        <div id="cont-project" className="w-80  border-2 border-gray-700 rounded-lg m-3 h-auto">
          <img className="img-project rounded-t-lg h-2/5 w-full object-cover" src={screenTodo} alt="" />
          <div className="flex h-3/5">
            <div className=" w-3/4 pl-2">
              <h4 className="skills text-gray-400">To Do App</h4>
              <p className="skills text-sm text-gray-400 mb-2">App to create, mark, edit, and filter tasks according to their completion status.</p>
              <div className="flex flex-wrap text-white">
              <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">React</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Next.js</label>   
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">MongoDB</label> 
                
              </div>
            </div>
            <div className="text-white w-1/4 flex items-end justify-end m-2">
                <a target='_blank' href="https://github.com/JereDev8/To-Do-List"><OpenInNewIcon/></a>
            </div>
          </div>
        </div>


        <div id="cont-project" className="w-80  border-2 border-gray-700 rounded-lg m-3 h-auto">
          <img className="img-project rounded-t-lg h-2/5 w-full object-cover" src={screenShop} alt="" />
          <div className="flex h-3/5">
            <div className=" w-3/4 pl-2">
              <h4 className="skills text-gray-400">Store app</h4>
              <p className="skills text-sm text-gray-400 mb-2">Clothing store that includes filtering and a cart to create your shopping list.</p>
              <div className="flex flex-wrap text-white">
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">React</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Next.js</label>   
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">MongoDB</label> 

              </div>
            </div>
            <div className="text-white w-1/4 flex items-end justify-end m-2">
                <a target='_blank' href="https://github.com/JereDev8/Store-React"><OpenInNewIcon/></a>
            </div>
          </div>
        </div>


        <div id="cont-project" className="w-80  border-2 border-gray-700 rounded-lg m-3 h-auto">
          <img className="img-project rounded-t-lg h-2/5 w-full object-cover" src={screenBurguer} alt="" />
          <div className="flex h-3/5">
            <div className=" w-3/4 pl-2">
              <h4 className="skills text-gray-400">Burguer App</h4>
              <p className="skills text-sm text-gray-400 mb-2">Website for a burger restaurant aimed at promotion. It also features a sort of e-commerce using an API.</p>
              <div className="flex flex-wrap text-white">
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">HTML</label>
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">CSS</label> 
                <label className="bg-green-900 py-1 px-3 rounded-2xl skills font-normal text-sm mr-3 my-1">Javascript</label> 
                
              </div>
            </div>
            <div className="text-white w-1/4 flex items-end justify-end m-2">
                <a target='_blank' href="https://jereq8.github.io/CapitalBurguer/"><OpenInNewIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
