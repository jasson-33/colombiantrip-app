import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './meet-home.module.css';

const MeetHome = ({ blogdata }) => {
  const { title, subtitle, blogs } = blogdata;
  const { Bigola } = useContext(ColombianContext);

  console.log(blogdata);

  return (
    <section className={`siteSection ${styles.meetSection}`}>
      <div className={`container ${styles.containerMeetSction}`}>
        <h2
          className={`${styles.meetHomeTitle} ${Bigola.className}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h3
          className={`${styles.subtitleMeetHome}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className={styles.blogsContainer}>
          {blogs.map((blog, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={styles.cardBlog}>
              <div className={`bg-cv ${styles.imgCardBog}`}>
                <Image
                  src={blog.img.sizes ? blog.img.sizes.large : ''}
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

              <Link
                href={`/meet-colombia/${blog.url}`}
                className={styles.readMoreAnchor}>
                <span className={`bg-ct ${styles.arrowRight}`}></span> Read More
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/meet-colombia"
          className={`${styles.allArticles} ${styles.readMoreAnchor}`}>
          <span className={`bg-ct ${styles.arrowRight}`}></span>VIEW ALL
          ARTICLES
        </Link>
      </div>
    </section>
  );
};

export default MeetHome;
