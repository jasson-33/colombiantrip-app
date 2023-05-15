import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import styles from './blog-img-block.css';

const ImgBlockBlog = ({ imgBlock }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(typeof window !== 'undefined' && window.innerWidth);
    };
    window.addEventListener('resize', () => {
      resizeWindow();
    });
    return () => {
      window.removeEventListener('resize', () => {
        resizeWindow();
      });
    };
  }, [screenWidth]);
  return (
    <div className={`blockTexk ${styles.imgBlock}`}>
      <Image
        src={imgBlock.img.sizes ? imgBlock.img.sizes.large : ''}
        fill
        alt="img-blog"
      />
    </div>
  );
};

export default ImgBlockBlog;
