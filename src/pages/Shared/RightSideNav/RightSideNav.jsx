import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {

    return (
        <>
            <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-2xl">Login With</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle />
              Google
             </button>
            <button className="btn btn-outline w-full">
            <FaGithub />
              GitHub
             </button>
            </div>

            <div className='p-4  mb-6'>
            <h2 className="text-2xl">Find Us</h2>
               <a className='p-4 flex gap-3 items-center rounded-t-lg text-lg' href="">
                  <FaFacebook /> <span>Facebook</span>
               </a>
               <a className='p-4 flex gap-3 items-center rounded-t-lg text-lg' href="">
                  <FaTwitter /> <span>Twitter</span>
               </a>
               <a className='p-4 flex gap-3 items-center rounded-t-lg text-lg' href="">
                  <FaInstagram /> <span>Instagram</span>
               </a>
            </div>
              {/* q zone */}
              <div className='p-4 space-y-3 mb-6'>
                   <h2 className="text-3xl">Q Zone</h2>
                   <img src={qZone1} alt="" />
                   <img src={qZone2} alt="" />
                   <img src={qZone3} alt="" />
              </div>
        </>
    );
};

export default RightSideNav;