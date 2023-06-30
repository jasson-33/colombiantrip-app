import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './proud-members.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProudMembers = () => {
  const { Bigola } = useContext(ColombianContext);

  const members = [
    '/images/b2b/9.png',
    '/images/b2b/5.png',
    '/images/b2b/3.jpeg',
    '/images/b2b/7.jpeg',
    '/images/b2b/6.png',
    '/images/b2b/8.jpeg',
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className={`siteSection ${styles.proudSection}`}>
      <div className={`container ${styles.containerProudMembers}`}>
        <h2
          className={`${styles.titleProud} ${Bigola.className}`}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0">
          Proud Members
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={styles.subtitleProudMembers}>
          An independent affiliate of Gifted Travel Network — a Virtuoso®
          Member.
        </h3>
      </div>

      <div className={`${styles.wrapperMembers}`}>
        <div
          className={`${styles.containerMembers} flex f-ac f-c`}
          style={{
            width: `${members.length * 16 > 100 ? members.length * 16 : 100}vw`,
          }}>
          {members.map((member, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.memberIcon} bg-ct`}
              style={{
                backgroundImage: `url(${member})`,
                width: `${100 / members.length}%`,
              }}></div>
          ))}
        </div>

        <div
          className={`${styles.containerMembers} flex f-ac f-c`}
          style={{
            width: `${members.length * 16 > 100 ? members.length * 16 : 100}vw`,
            left: `${members.length * 16 > 100 ? members.length * 16 : 100}vw`,
          }}>
          {members.map((member, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.memberIcon} bg-ct`}
              style={{
                backgroundImage: `url(${member})`,
                width: `${100 / members.length}%`,
              }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProudMembers;
