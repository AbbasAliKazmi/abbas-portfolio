import React from 'react';

// ************images***********
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href="syedabbasali1998.aa@gmail.com">
            <img src={Logo} alt="" />
          </a>
          <div>  
            <a href="https://drive.google.com/file/d/1nsiGSJVEbt4AmI7vAE6NaieCwGQ7OKJg/view?usp=drivesdk">
              <button className='ml-10 btn btn-sm'>
                See my Resume/CV 
              </button>
            </a>
            <a className="px-2">
              <button className='btn btn-sm'>
                Work With Me
              </button>
            </a>
          </div>
        </div>
      </div>
  </header>;
};

export default Header;
