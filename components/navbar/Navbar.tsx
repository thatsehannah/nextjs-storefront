import React from 'react';
import Container from '../global/Container';
import Logo from './components/Logo';
import NavSearch from './components/NavSearch';
import CartButton from './components/CartButton';
import DarkMode from './components/DarkMode';
import LinksDropDown from './components/LinksDropDown';

const Navbar = () => {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
