import { useContext } from 'react';
import styles from './calendar.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const Calendar = () => {
  const { Bigola } = useContext(ColombianContext);
  console.log(Bigola);
  return (
    <section className={styles.calendarSection}>
      <div className={`container ${styles.calendarContainer}`}>
        <h2 className={`${styles.calendarTitle} ${Bigola.className}`}>
          I am ready to start my trip to Colombia
        </h2>
        <p className={styles.calendarInfo}>
          Book a 1-1 call and we&apos;ll make sure your answers are answered!
        </p>

        <iframe
          src="https://calendly.com/thecolombiantrip/30min?month=2023-10"
          className={styles.calendarIframe}></iframe>
      </div>
    </section>
  );
};

export default Calendar;
