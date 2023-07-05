import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './header.module.css';
import { useRouter } from 'next/navigation';

const Header = ({ animate, setAnimate, categories, currCategory }) => {
  const [valueCities, setValueCities] = useState(currCategory);
  const [valueCat, setValueCat] = useState('0');
  const { Bigola } = useContext(ColombianContext);
  const [isInHero, setIsInHero] = useState(true);
  const header = useRef(null);
  const toggleMenu = () => {
    setAnimate(!animate);
  };
  const router = useRouter();
  console.log(categories);
  console.log(currCategory);
  useEffect(() => {
    const switchHeader = () => {
      if (!header.current.classList.contains(styles.lightHeader)) {
        if (window.scrollY >= 50) {
          setIsInHero((prev) => (prev = false));
        }
      }
      if (header.current.classList.contains(styles.lightHeader)) {
        if (window.scrollY <= 50) {
          setIsInHero((prev) => (prev = true));
        }
      }
    };
    window.addEventListener('scroll', switchHeader);
    return () => {
      window.removeEventListener('scroll', switchHeader);
    };
  }, []);
  // setValueCat(currCategory);
  return (
    <header
      ref={header}
      className={`${!isInHero ? styles.lightHeader : ''} ${
        animate ? styles.activeHeader : ''
      } ${styles.siteHeader} siteHeader`}>
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
          {categories && (
            <div className={styles.innerContFilter}>
              {categories.Cities && (
                <select
                  value={valueCities}
                  onChange={(e) => {
                    setValueCities(e.target.value);
                    router.push(e.target.value);
                  }}
                  className={`${styles.citiesSelect} ${Bigola.className}`}>
                  <option value="/meet-colombia">Cities</option>
                  {categories.Cities.length > 0 &&
                    categories.Cities.map((category, i) => (
                      <option key={`cities${i}`} value={category.link}>
                        {category.name}
                      </option>
                    ))}
                </select>
              )}
              {categories.Categories && (
                <select
                  value={valueCat}
                  onChange={(e) => {
                    setValueCat(e.target.value);
                    router.push(e.target.value);
                  }}
                  className={`${styles.citiesSelect} ${Bigola.className}`}>
                  <option value="/meet-colombia">Categories</option>
                  {categories.Categories.length > 0 &&
                    categories.Categories.map((category, i) => (
                      <option key={`categories${i}`} value={category.link}>
                        {category.name}
                      </option>
                    ))}
                </select>
              )}
            </div>
          )}
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
