import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styles from './header.module.css';

const Header = ({ animate, setAnimate, categories }) => {
  const [valueCities, setValueCities] = useState('0');
  const [valueCat, setValueCat] = useState('0');
  const { Bigola } = useContext(ColombianContext);
  const toggleMenu = () => {
    setAnimate(!animate);
  };

  console.log(categories);
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

        <div className={styles.contFilter}>
          <div className={styles.innerContFilter}>
            <select
              value={valueCities}
              onChange={(e) => {
                setValueCities(e.target.value);
              }}
              className={`${styles.citiesSelect} ${Bigola.className}`}>
              <option value="0">Cities</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select
              value={valueCat}
              onChange={(e) => {
                setValueCat(e.target.value);
              }}
              className={`${styles.citiesSelect} ${Bigola.className}`}>
              <option value="0">Categories</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
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
