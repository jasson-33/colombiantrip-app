import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from './menu.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const Menu = ({animate, setAnimate}) => {
  const { Gotham } = useContext(ColombianContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(animate){
      setTimeout(() => {
        setShow(true);        
      }, 100);
    }else{
        setShow(false);
    }
  }, [animate])

  const hideMenu = () => {
    setTimeout(() => {
      setAnimate(false);      
    }, 500);
  };

  return (
    <div className={`${styles.siteMenu} ${show ? styles.active : ''} flex f-c f-ac`}>
      <div className={`${styles.leftMenu} bg-cv`}></div>
      <div className={styles.rightMenu}>
        <div className={`${styles.halfFace} bg-ct`}></div>
        <ul className={`${styles.ulMenu} ${Gotham.className}`}>
          <li className={styles.itemMenu}>
            <Link href="/about" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>01</span>About us
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/experience" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>02</span>Experience
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/meet-colombia" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>03</span>Meet Colombia
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/how-it-works" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>04</span>How it works
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/why-choose-us" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>05</span>Why Choose us
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/b2b" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>06</span>B2B
            </Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/get-in-touch" onClick={() => hideMenu()}>
              <span className={styles.numberItemMenu}>07</span>Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
