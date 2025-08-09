import leftpic from '../assets/pic.png'
import { Link } from 'react-scroll'

export default function Home(){

    return <div id="Home" className="pt-25  bg-cyan-400 h-screen flex flex-col items-center md:flex-row md:items-start">
        
        <div className="m-3 left  w-[50%] flex justify-center items-center">
    <img src={leftpic} alt="" className='h-70 md:h-120 rounded-xl ' />
        </div>

     

{/* Right Side */}
  <div className="m-3 w-full md:w-1/2 bg-gradient-to-br from-cyan-500 via-teal-400 to-cyan-600 rounded-2xl shadow-lg overflow-hidden">

  
  <div className="py-6 px-4 md:px-8 text-center text-white text-2xl md:text-4xl font-extrabold tracking-wide border-b border-white/20">
    Fast, Secure & Trusted
  </div>
  
  <div className="p-4 md:p-6 space-y-3 text-white/90 text-base md:text-lg">
    <p className="flex items-center gap-2">
      <span className="text-teal-200 text-xl">✔</span> Faster Analysis for Doctors
    </p>
    <p className="flex items-center gap-2">
      <span className="text-teal-200 text-xl">✔</span> Easy to Use for Everyone
    </p>
    <p className="flex items-center gap-2">
      <span className="text-teal-200 text-xl">✔</span> Makes Healthcare Simpler
    </p>
  </div>
  
  <div className="p-4 md:p-6 text-center">
    <button className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-300">
        <Link to="GetYours" smooth={true} duration={500} className='nodash m-2 hover:underline cursor-pointer'>🚀 Get Now</Link>
      
    </button>
  </div>

</div>

    </div>
}