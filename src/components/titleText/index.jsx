import { useContext } from 'react';
import styles from './title-text.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const TitleText = ({ content }) => {
  const { Bigola } = useContext(ColombianContext);
  console.log(content);
    const { title, paragraphs } = content;
  return (
    <section className={`${styles.titleTextBlock} `}>
      <div className={`${styles.container}`}>
        {title && (
          <h2 className={`${styles.titleBlock} ${Bigola.className}`}>
            {title}
          </h2>
        )}
        {paragraphs &&
          paragraphs.length > 0 &&
          paragraphs.map((paragraph, i) => (
            <p key={i} className={`${styles.paragraphText}`}>
              {paragraph}
            </p>
          ))}
      </div>
    </section>
  );
};

export default TitleText;
