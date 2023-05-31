import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Header = ({ animate, setAnimate, categories }) => {
  console.log(categories);
  const toggleMenu = () => {
    setAnimate(!animate);
  };
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.containerHeader} container flex f-sb f-ac`}>
        <div className={`${styles.logo} bg-ct`}>
          <Link
            href="/"
            onClick={() =>
              setTimeout(() => {
                setAnimate(false);
              }, 500)
            }>
            <Image
              width={170}
              height={35}
              src={
                !animate
                  ? '/images/general/logo-red.png'
                  : '/images/general/logo-white.png'
              }
              alt="Site logo"
              title="Colombian Trip"
            />
          </Link>
        </div>

        <div
          className={`${styles.burgerMenu} bg-ct ${
            animate ? styles.opened : ''
          }`}
          onClick={() => toggleMenu()}></div>
      </div>
    </header>
  );
};

export default Header;
