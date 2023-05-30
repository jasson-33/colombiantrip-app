import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './grid.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Grid = () => {
  const { Bigola } = useContext(ColombianContext);
  /*
  const chooseUsGrid = [
    { img: '' },
    { title: '', text: ['', ''], bgColor: '' },
    { img: '' },
    { title: '', text: ['', ''], bgColor: '' },
    { img: '' },
    { title: '', text: ['', ''], bgColor: '' },
  ];
  */
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className={`${styles.gridSection}`}>
      <div className={`container ${styles.gridContainer}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.gridItem} bg-cv`}
          style={{ backgroundImage: 'url(/images/why-choose/42.jpg)' }}></div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
          className={`${styles.gridItem} ${styles.gridDescItem}`}
          style={{ backgroundColor: '#D23250', color: '#fff' }}>
          <h3 className={`${styles.titleItemGrid} ${Bigola.className}`}>
            Flexibility to Explore on Your Own Terms
          </h3>
          <p className={styles.infoGridItem}>
            Each itinerary we design is custom-crafted for our individual
            client. Go where you want, explore at your preferred pace, and dive
            into your unique passions—we’ll design it all (at a price point that
            fits your budget!).
          </p>
          <p className={styles.infoGridItem}>
            Once you arrive in Colombia, you’ll enjoy the peace and flexibility
            of private guides, drivers, and transfers throughout your stay. Want
            to veer off the path, try a delicious-looking roadside stand, or
            skip a scheduled activity and sleep in? No hay problema. Your
            private guide will adjust on the fly. This is your Colombian Trip!
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="300"
          className={`${styles.gridItem} bg-cv`}
          style={{ backgroundImage: 'url(/images/why-choose/44.jpg)' }}></div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.gridItem} ${styles.gridDescItem}`}
          style={{ backgroundColor: '#FCBE15', color: '#7A5D0C' }}>
          <h3 className={`${styles.titleItemGrid} ${Bigola.className}`}>
            Comfort, Confidence, and Peace of Mind
          </h3>
          <p className={styles.infoGridItem}>
            We want you to explore our beloved country with complete confidence,
            not uncertainty. Rest assured we work with thoroughly vetted travel
            guides and companies in destination, and your safety and comfort is
            always top of mind. Our English-speaking local guides—which include
            experts in their fields, such as historians, anthropologists, and
            biologists—know the territory intimately and can’t wait to share it
            all with you.
          </p>
          <p className={styles.infoGridItem}>
            In fact, every step of your journey will be safe and seamless.
            You’ll be welcomed at the airport by a representative—or we can
            arrange a group tour leader to escort your vacation during your
            journey through Colombia. If you have any questions, concerns, or
            special requests while you travel, simply reach out to our team. You
            have our support 24/7.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
          className={`${styles.gridItem} bg-cv`}
          style={{ backgroundImage: 'url(/images/why-choose/43.jpg)' }}></div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="250"
          className={`${styles.gridItem} ${styles.gridDescItem}`}
          style={{ backgroundColor: '#AFCA0C', color: '#576409' }}>
          <h3 className={`${styles.titleItemGrid} ${Bigola.className}`}>
            In-Destination Expertise, from a U.S.-Based Company
          </h3>
          <p className={styles.infoGridItem}>
            The Colombian Trip has outposts in both Los Angeles and Colombia. We
            bring you our unparalleled on-the-ground expertise (no one knows
            Colombia like we do), combined with the security and perks of being
            a U.S.-based business.
          </p>
          <p className={styles.infoGridItem}>
            We’re also affiliated with leading travel industry networks and
            organizations—and you get to reap the benefits of our relationships
            with extra special service and surprise complimentary amenities when
            you check in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
