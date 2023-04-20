import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './meet-home.module.css';

const MeetHome = () => {
  const { Bigola } = useContext(ColombianContext);

  const blogsHome = [
    {
      title: 'Lorem ipsum dolor sit, consectetur adipiscing elit',
      summary:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      img: '/images/home/04.jpg',
      url: '',
      date: '02/13/23',
    },
    {
      title: 'Lorem ipsum dolor sit, consectetur adipiscing elit',
      summary:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      img: '/images/home/05.jpg',
      url: '',
      date: '02/13/23',
    },
    {
      title: 'Lorem ipsum dolor sit, consectetur adipiscing elit',
      summary:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      img: '/images/home/06.jpg',
      url: '',
      date: '02/13/23',
    },
  ];
  return (
    <section className={`siteSection ${styles.meetSection}`}>
      <div className={`container ${styles.containerMeetSction}`}>
        <h2 className={`${styles.meetHomeTitle} ${Bigola.className}`}>
          Meet Colombia
        </h2>
        <h3 className={`${styles.subtitleMeetHome}`}>
          Going on vacation? Here's what you need to know about Colombia.
        </h3>

        <div className={styles.blogsContainer}>
          {blogsHome.map((blog, i) => (
            <div key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i} className={styles.cardBlog}>
              <div className={`bg-cv ${styles.imgCardBog}`}>
                <Image
                  src={blog.img}
                  fill
                  alt="img-blog"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className={`${Bigola.className} ${styles.dateCardBlog}`}>
                {blog.date}
              </p>
              <h2 className={`${styles.titleCardBlog} ${Bigola.className}`}>
                {blog.title}
              </h2>
              <p className={styles.summaryCardBlog}>{blog.summary}</p>

              <Link href='/' className={styles.readMoreAnchor}><span className={`bg-ct ${styles.arrowRight}`}></span> Read More</Link>
            </div>
          ))}
        </div>
        <Link href='/' className={`${styles.allArticles} ${styles.readMoreAnchor}`}><span className={`bg-ct ${styles.arrowRight}`}></span>VIEW ALL ARTICLES</Link>
      </div>
    </section>
  );
};

export default MeetHome;
