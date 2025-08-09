import logo from '../assets/Weblogo.png'
import {GithubOutlined , InstagramOutlined , LinkedinOutlined} from '@ant-design/icons'
const Footer = ()=>{


    return <div className="h-[100%] bg-cyan-700 p-3">
        <div className="top">
            <div className='flex items-end justify-between'>
                <img src={logo} alt="" className='h-15 rounded-xl shadow-sm shadow-white ' />
                <p className='mx-2 text-white text-lg'> Disease Detector 101</p>
            </div>
            <hr className='border-1 border-white my-4' />
        </div>
                <div className="warn">
            <p className='text-white text-sm md:text-lg'><span className='text-red-500 text-xl'>Disclaimer: </span> This model is an early-stage, beginner-level AI trained on a small dataset of chest X-ray images. It works by detecting white spots in the chest area that may indicate pneumonia which creates the baseline for the doctors. If you upload images that are not chest X-rays, the results may be inaccurate or unpredictable. While this tool can provide a quick preliminary analysis and help doctors get a rapid overview in high-patient or large-crowd situations, it is not a substitute for professional medical diagnosis. Always consult a qualified doctor for confirmation and treatment.</p>
        </div>
        <div className="lower flex flex-row sm:flex-col items-end justify-between mt-3">
            <div className="social">
                <a href="https://github.com/rahulkumarparida" target='_blank'>
                <GithubOutlined className='bg-white  m-3 p-2 rounded-sm' />
                </a>
                <a href="https://www.instagram.com/rahulroxx460/" target='_blank'>
                <InstagramOutlined className='bg-white  m-3 p-2 rounded-sm' />

                </a>
                <a href="https://www.linkedin.com/in/rahul-kumar-parida-b6219a292/" target='_blank'>

                <LinkedinOutlined className='bg-white  m-3 p-2 rounded-sm' />
                </a>
            
            </div>
            <div>
                <p className='text-white'>Created by github.com/rahulkumarparida</p>
            </div>
        </div>

    </div>

}

export default Footer