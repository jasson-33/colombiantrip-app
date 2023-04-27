import React, { useEffect, useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import { useContext } from 'react';
import { ColombianContext } from '@/context/ColombianContext';
import Footer from '../footer';
import { useRouter } from 'next/router';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

const Layout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { Gotham } = useContext(ColombianContext);

  const router = useRouter();

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/menu`,
    fetcher
  );

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

  if (error) {return 'An error has occurred.';}

  //if (isLoading) {return 'Loading...';}
  return (
    <main className={`siteMain ${Gotham.className}`}>
      <Header animate={animate} setAnimate={setAnimate}/>
      {showMenu ? <Menu animate={animate} setAnimate={setAnimate} mainmenu={data}/> : ''}
      {children}
      <Footer changeLayout={router.pathname === '/how-it-works'}/>
    </main>
  );
};

export default Layout;
