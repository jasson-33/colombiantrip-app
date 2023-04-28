import React, { useState } from 'react';
import styles from './info-recomendations.module.css';

const InfoRecomendations = () => {
  const [typeInfo, setTypeInfo] = useState('docs');

  const docsExperience = {
    notes: [
      'The yellow fever vaccine is suggested , please bring a valid card. The vaccine has to be placed at least 10 days in advance of arrival to the Amazon.',
      'Flights departing from Leticia must be programmed after noon.',
    ],
    inlcuded: [
      "Transfer Leticia's Airport – Pier of Leticia – Leticia's Airport in Private service",
      "Transfer on boat from Pier to Calanoa's Natural Reserve and viceversa in Private service",
      '3 nights in a cottage with (3 breakfasts , 3 lunches and 3 dinners - menu)',
      'Nocturnal Hiking Tour in regular service',
      'Tour to visit the indigenous communities , The Matamata waterfall and the canoes paddling experience in shared service. (The last one, subject to the water level condition).',
      "Hike tour in The Mocagua's Island , visit to the lakes where the “Victorias Amazonicas” plants are and boat trip to search the Pink Dolphins and to enjoy an Amazon sunset in shared service.",
      'English speaking guide',
    ],
    notIncluded: [
      "Tourism Tax of the Leticia's airport, that should be paid directly there, in Colombian pesos (approximately USD 12 per person)",
      'Domestic flights',
    ],
  };
  const recomendationsExperience = {
    notes: [
      'Flights departing from Leticia must be programmed after noon.',
      'The yellow fever vaccine is suggested , please bring a valid card. The vaccine has to be placed at least 10 days in advance of arrival to the Amazon.',
    ],
    inlcuded: [
      '3 nights in a cottage with (3 breakfasts , 3 lunches and 3 dinners - menu)',
      "Transfer on boat from Pier to Calanoa's Natural Reserve and viceversa in Private service",
      "Hike tour in The Mocagua's Island , visit to the lakes where the “Victorias Amazonicas” plants are and boat trip to search the Pink Dolphins and to enjoy an Amazon sunset in shared service.",
      'English speaking guide',
      'Nocturnal Hiking Tour in regular service',
      'Tour to visit the indigenous communities , The Matamata waterfall and the canoes paddling experience in shared service. (The last one, subject to the water level condition).',
      "Transfer Leticia's Airport – Pier of Leticia – Leticia's Airport in Private service",
    ],
  };

  return (
    <section className={`${styles.infoRecomendation} siteSection`}>
      <div className={`container ${styles.infoRecomendContainer}`}>
        <div className={`${styles.controllersContainer}`}>
          <div
            className={`${styles.controller} ${
              typeInfo === 'docs' && styles.active
            }`}
            onClick={() => setTypeInfo('docs')}>
            <div
              className={`${styles.iconController} ${styles.infoIcon} bg-ct`}></div>
            <p className={`${styles.labelController}`}>
              Information & Documents
            </p>
          </div>
          <div
            className={`${styles.controller} ${
              typeInfo !== 'docs' && styles.active
            }`}
            onClick={() => setTypeInfo('recomend')}>
            <div
              className={`${styles.iconController} ${styles.recomendIcon} bg-ct`}></div>
            <p className={`${styles.labelController}`}>Recommendations</p>
          </div>
        </div>

        <div className={`${styles.innerInfo}`}>
          <div className={styles.containerInnerInfo}>
            <h2 className={styles.subtitleInnerInfo}>Important Notes:</h2>

            <ul className={styles.ulInnerInfo}>
              {typeInfo === 'docs' &&
                docsExperience.notes.map((note, i) => (
                  <li
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.itemInnerInfo}>
                    {note}
                  </li>
                ))}
              {typeInfo !== 'docs' &&
                recomendationsExperience.notes.map((note, i) => (
                  <li
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.itemInnerInfo}>
                    {note}
                  </li>
                ))}
            </ul>

            <h2 className={styles.subtitleInnerInfo}>Included:</h2>

            <ul className={styles.ulInnerInfo}>
              {typeInfo === 'docs' &&
                docsExperience.inlcuded.map((item, i) => (
                  <li
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.itemInnerInfo}>
                    {item}
                  </li>
                ))}
              {typeInfo !== 'docs' &&
                recomendationsExperience.inlcuded.map((item, i) => (
                  <li
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.itemInnerInfo}>
                    {item}
                  </li>
                ))}
            </ul>

            {typeInfo === 'docs' && docsExperience.notIncluded && (
              <>
                <h2 className={styles.subtitleInnerInfo}>Not Included:</h2>

                <ul className={styles.ulInnerInfo}>
                  {typeInfo === 'docs' &&
                    docsExperience.notIncluded.map((item, i) => (
                      <li
                        key={
                          typeof window !== 'undefined'
                            ? window.crypto.randomUUID()
                            : i
                        }
                        className={styles.itemInnerInfo}>
                        {item}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoRecomendations;
