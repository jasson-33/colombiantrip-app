import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './hero.module.css';

const Hero = ({ contentHero }) => {
  const { Bigola } = useContext(ColombianContext);

  return (
    <div
      className={`${styles.hero} bg-cv ${contentHero.withForm && styles.withForm} ${contentHero.blog && styles.smallHero}`}
      style={{
        backgroundImage: `url(${
          contentHero.img_banner.sizes?contentHero.img_banner.sizes['super-large']:'/images/home/2.jpg'
        })`,
      }}>
      <div className={`${styles.containerHero} container flex f-s f-ae`}>
        <div className={`${styles.contentHero}`}>
          {contentHero.type === 'principal' ? (
            <>
              <h2 className={`${styles.principalText} ${Bigola.className}`} dangerouslySetInnerHTML={{__html:contentHero.title}} />
              <h3 className={styles.subtitleText} dangerouslySetInnerHTML={{__html:contentHero.subtitle}} />

              <div className={`${styles.ctasHero} flex f-s f-ac`}>
                <div className={styles.ctaHero}>
                  <Link href="/">
                    <div className={`${styles.iconCtaHero} bg-ct`}></div>
                    LET&apos;S CREATE YOUR DREAM TRIP
                  </Link>
                </div>
                <div className={styles.ctaHero}>
                  <Link href="/">
                    <div className={`${styles.iconCtaHero} bg-ct`}></div>
                    B2B PARTNERSHIP
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className={`${styles.bigTitleHero} ${Bigola.className}`} dangerouslySetInnerHTML={{__html:contentHero.title}} />
              {contentHero.subtitle && (
                <h3 className={styles.subtitleHero} dangerouslySetInnerHTML={{__html:contentHero.subtitle}} />
              )}
              {contentHero.withForm && (
                <form className={styles.heroForm}>
                  <h3 className={`${styles.titleFormHero} ${Bigola.className}`}>Contact us</h3>

                  <p className={styles.textHeroForm}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <input type="text" name="" id="" className={`${styles.inputHeroForm}`} placeholder='Full name' />
                  <input type="email" name="" id="" className={`${styles.inputHeroForm}`} placeholder='Email address' />
                  <textarea name="" id="" placeholder='Message' className={`${styles.inputHeroForm} ${styles.messageHero}`}></textarea>

                  <button className={styles.submitHeroForm}>
                    <div className={`${styles.arrowForm} bg-ct`}></div>
                    <p className={styles.sendText}>SEND</p>
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
