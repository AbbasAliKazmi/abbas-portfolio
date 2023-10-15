import React from 'react';

// ************images***********
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="syedabbasali1998.aa@gmail.com">
            <img src={Logo} alt="" />
          </a>
          <button className='btn btn-sm'>
            Work with me
          </button>
        </div>
      </div>
  </header>;
};

export default Header;
