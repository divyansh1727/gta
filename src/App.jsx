import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/gsap-core';
import 'remixicon/fonts/remixicon.css';



function App() {
  let[showcontent,setshowcontent]=useState(false)
  useGSAP( ()=>{
    const t1=gsap.timeline();
    t1.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress()>=.9){
          document.querySelector(".svg").remove();
          setshowcontent(true);
          //will kill the svg and the content
          this.kill();
        }
      }

    })
  })
  useGSAP(()=>{
    if(!showcontent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
      
    })
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
      
    })
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
      
    })
    gsap.to(".chrt",{
      scale:1.4,
      x:"-50%",
      rotate:0,
      duration:2,
      bottom:"-25%",
      delay:"-.8",
      ease:"Expo.easeInOut",
      
    })
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
      
    })
    






    const main =document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
      const xmove=(e.clientX/window.innerWidth-0.5)*40;
      gsap.to(".main .text",{
        x:`${xmove* 0.4}%`,
      })
      gsap.to(".sky",{
        x:xmove,
      })
      gsap.to(".bg",{
        x:xmove*1.7,
      })

    })

  },[showcontent])

  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent && (
        <div className="main w-full rotate-[-10deg] scalew-[1.7] bg-black">
          <div className="landing w-full overflow-hidden relative h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>


                </div>
                <h3 className="text-4xl mt-[8px] leading-none text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imgdiv relative overflow-hidden w-full h-screen">
              <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object cover scale-[1.2]" src="./sky.png" alt="" />
              <img className="absolute  scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover scale-[1.3]" src="./bg.png" alt="" />
              <div className="text absolute text-white flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 scale-[1.4] roatate-[-10deg]">
              <h1 className="text-[9rem] leading-none-ml-40">Grand</h1>
              <h1 className="text-[9rem] leading-none ml-20">Theft</h1>
              <h1 className="text-[9rem] leading-none -ml-40">Auto</h1>
            </div>
              <img className="absolute  chrt top-1/2 -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-30deg]" src="./girlbg.png" alt="" />
              


            </div>
            <div className="btmnav text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-2xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]" src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex px-10 flex items-center justify-center bg-black">
            <div className="cntr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
              <img className="absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
            </div>
            <div className="rimg w-[40%] py-26">
              <h1 className="text-8xl">Still Running,</h1>
              <h1 className="text-8xl">Not Hunting</h1>
              <p className="mt-[18] text-xl font-[Helvetica_Now_Display]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eos sed pariatur?</p>
              <p className="mt-[3] text-xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, unde nisi corporis minus molestias ratione praesentium enim assumenda officiis, nihil non, voluptatem distinctio quas animi inventore molestiae expedita dicta! Quidem culpa exercitationem totam nulla sequi.</p>
              <button className="bg-yellow-500 mt-10 px-10 py-10 text-4xl text-black">Download Now</button>

              

            </div>

          </div>
            

        </div>

      </div>
    )}

      
      


      
      
        
          



  </>
      
  )
}
export default App      