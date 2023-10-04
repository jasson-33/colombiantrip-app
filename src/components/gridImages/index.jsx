import styles from './grid-images.module.css';

const GridImages = () => {
  const images = [
    {
      img: '/images/instant-booking/instant-1.jpg',
      width: 1,
      height: 2,
    },
    {
      img: '/images/instant-booking/instant-2.jpg',
      width: 1,
      height: 1,
    },
    {
      img: '/images/instant-booking/instant-3.jpg',
      width: 1,
      height: 1,
    },
    {
      img: '/images/instant-booking/instant-4.jpg',
      width: 2,
      height: 1,
    },
    {
      img: '/images/instant-booking/instant-5.jpg',
      width: 1,
      height: 1,
    },
    {
      img: '/images/instant-booking/instant-1.jpg',
      width: 1,
      height: 1,
    },
  ];
  return (
    <section className={styles.gridImages}>
      <div className={styles.containerGrid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles[`width-${img.width}`]} ${
              styles[`height-${img.height}`]
            } ${styles.innerGridImages}`}
            style={{ backgroundImage: `url(${img.img})` }}></div>
        ))}
      </div>
    </section>
  );
};

export default GridImages;
