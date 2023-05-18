import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import LatestPost from '../latest-post';
import PostCard from '../post-card';
import styles from './all-post.module.css';
const AllPosts = ({
  popularPost,
  categoryPosts,
  allCategoryPost,
  pageType,
}) => {
  const { Bigola } = useContext(ColombianContext);
  // console.log(allCategoryPost.curr_posts);
  return (
    <section
      className={`siteSection ${styles.allpost} ${
        allCategoryPost && styles.allCatcontainer
      }`}>
      <div
        className={`container ${styles.containerAllPost} ${
          popularPost ? styles.popularView : ''
        }`}>
        {popularPost && (
          <>
            <div className={styles.titlesPosts}>
              <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
                Popular Post
              </h3>
              <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
                Latest Post
              </h3>
            </div>
            <div className={styles.containerPopularLatestPost}>
              <PostCard popularPost={popularPost.popular} />
              <LatestPost latestPosts={popularPost.latest} />
            </div>
          </>
        )}
        {categoryPosts && categoryPosts.posts && categoryPosts.posts.length && (
          <>
            <div className={styles.titlesPosts}>
              <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
                {categoryPosts.categoryType}
              </h3>
              <h3 className={`${styles.titlePostType} ${styles.viewAll}`}>
                <Link
                  href={`/meet-colombia/${categoryPosts.categoryType.toLowerCase()}`}>
                  VIEW ALL
                </Link>
              </h3>
            </div>
            <div
              className={`${styles.containerPopularLatestPost} ${
                styles.containerByType
              } ${categoryPosts.layout === 'B' && styles.containerLayoutB}`}>
              <div className={`${styles.containerPrincipalPost} `}>
                <PostCard popularPost={categoryPosts.posts[0]} />
              </div>
              <div className={styles.otherPostContainer}>
                {categoryPosts.posts[1] && (
                  <PostCard popularPost={categoryPosts.posts[1]} />
                )}
                {categoryPosts.posts[1] && (
                  <PostCard popularPost={categoryPosts.posts[2]} />
                )}
              </div>
            </div>
          </>
        )}
        {allCategoryPost && (
          <div className={`${styles.containerAllPosts} contAllCatPosts`}>
            {allCategoryPost.curr_posts.map((post, i) => (
              <PostCard
                key={
                  typeof window !== 'undefined' ? window.crypto.randomUUID() : i
                }
                popularPost={post}
                pageType={pageType === 'catPageStyle' ? 'catPageStyle' : ''}
              />
            ))}
          </div>
        )}
      </div>
      {allCategoryPost && (
        <div className={`${styles.containerPag} ${Bigola.className}`}>
          <ul>
            <li className={`${styles.itemPag} ${styles.selectedPag}`}>
              <Link href={'meet-colombia/cities/1'}>1</Link>
            </li>
            <li className={styles.itemPag}>
              <Link href={'meet-colombia/cities/2'}>2</Link>
            </li>
            <li className={styles.itemPag}>
              <Link href={'meet-colombia/cities/3'}>3</Link>
            </li>
            <li className={styles.itemPag}>
              <Link href={'meet-colombia/cities/4'}>4</Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default AllPosts;
