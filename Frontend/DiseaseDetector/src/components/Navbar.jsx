import logo from '../assets/Weblogo.png'

import { Link } from 'react-scroll'

export default function Navbar(){

    return <div className="bg-cyan-600 p-5 flex justify-between w-full  fixed">
        <div className="logo">
            <img src={logo} alt="Logo here"  className='h-10 rounded-xl shadow-xl'/>
        </div>

        <div className="actionPanel">
            <Link to="Home" smooth={true} duration={500} className='text-white m-2 hover:underline cursor-pointer'>Home</Link>
            <Link to="GetYours" smooth={true} duration={500} className='text-white m-2 hover:underline cursor-pointer'>Get Predictions</Link>
            <Link to="History" smooth={true} duration={500} className='text-white m-2 hover:underline cursor-pointer'>History</Link>
        </div>
    </div>
}