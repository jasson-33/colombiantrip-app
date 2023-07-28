import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styles from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ contentHero, pageType }) => {
  const { Bigola, expdata } = useContext(ColombianContext);

  console.log(expdata);
  console.log(contentHero);
  const {
    img_banner,
    title,
    subtitle,
    type,
    links,
    withForm,
    form,
    video_banner,
  } = contentHero;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`${styles.hero} bg-cv ${
        contentHero.withForm && styles.withForm
      } ${contentHero.blog && styles.smallHero} ${
        contentHero.type === 'principal'
          ? styles.principalHero
          : styles.secondaryHero
      } ${contentHero.withForm === true ? styles.heroPageForm : ''} ${
        pageType === 'post' ? styles.postHero : ''
      }`}>
      <div
        className={`${styles.imageInnerHero} bg-cv`}
        style={{
          backgroundImage: `url(${
            img_banner.sizes
              ? img_banner.sizes['super-large']
              : '/images/home/2.jpg'
          })`,
        }}></div>

      {video_banner && video_banner.url !== '' && (
        <video
          className={styles.videoBanner}
          autoPlay
          loop
          playsInline
          muted
          preload>
          <source src={video_banner.url.replace('http:','https:')} />
        </video>
      )}

      <div className={`${styles.containerHero} container flex f-s f-ae`}>
        <div className={`${styles.contentHero}`}>
          {type === 'principal' ? (
            <>
              {title !== '' && (
                <h1
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={`${styles.principalText} ${Bigola.className}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {subtitle !== '' && (
                <h3
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.subtitleText}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
              {links.length > 0 && (
                <div
                  className={`${styles.ctasHero} flex f-s f-ac`}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-offset="-150"
                  data-aos-delay="0">
                  {links.map((data, i) => (
                    <div key={`linkshero${i}`} className={styles.ctaHero}>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${data.link}`}>
                        <div className={`${styles.iconCtaHero} bg-ct`}></div>
                        {data.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {title !== '' && (
                <h1
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-offset="-150"
                  data-aos-delay="0"
                  className={`${styles.bigTitleHero} ${Bigola.className}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {subtitle !== '' && (
                <h3
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.subtitleHero}
                  dangerouslySetInnerHTML={{ __html: contentHero.subtitle }}
                />
              )}
              {withForm && (
                <form
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.heroForm}>
                  {form.title !== '' && (
                    <h3
                      className={`${styles.titleFormHero} ${Bigola.className}`}
                      dangerouslySetInnerHTML={{ __html: form.title }}></h3>
                  )}
                  {form.text !== '' && (
                    <p
                      className={styles.textHeroForm}
                      dangerouslySetInnerHTML={{ __html: form.text }}></p>
                  )}
                  <input
                    type="text"
                    name=""
                    id=""
                    className={`${styles.inputHeroForm}`}
                    placeholder="Full name"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    className={`${styles.inputHeroForm}`}
                    placeholder="Email address"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className={`${styles.inputHeroForm} ${styles.messageHero}`}></textarea>
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
