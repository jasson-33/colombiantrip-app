import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './legalContent.module.css';

const LegalContent = ({ legalcontent }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <div
      className={`${Bigola.className}`}
      dangerouslySetInnerHTML={{ __html: legalcontent }}
    />
  );
};

export default LegalContent;
