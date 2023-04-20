import React, { useEffect, useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import { useContext } from 'react';
import { ColombianContext } from '@/context/ColombianContext';
import Footer from '../footer';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { Gotham } = useContext(ColombianContext);

  const router = useRouter();

  useEffect(() => {
    let animationTimeout;
      if(animate){
        setShowMenu(true);
        clearTimeout(animationTimeout);
      }else{
        animationTimeout = setTimeout(() => {
          setShowMenu(false);
        }, 600);
      }
  }, [animate]);
  return (
    <main className={`siteMain ${Gotham.className}`}>
      <Header animate={animate} setAnimate={setAnimate}/>
      {showMenu ? <Menu animate={animate} setAnimate={setAnimate}/> : ''}
      {children}
      <Footer changeLayout={router.pathname === '/how-it-works'}/>
    </main>
  );
};

export default Layout;
