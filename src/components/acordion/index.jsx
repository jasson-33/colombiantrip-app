import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './acordion.module.css';

const Acordion = () => {
  const { Bigola } = useContext(ColombianContext);
  const stepsExperience = [
    {
      nameCity: 'Medellín',
      steps: [
        {
          infoDay: 'Day 1',
          featuresDay: [
            {
              iconFeature: '/images/general/plane.png',
              infoFeature:
                'Fly from Pereira to Santa Marta - Arrive at Simón Bolívar Airport',
            },
            {
              iconFeature: '/images/general/bed.png',
              infoFeature: 'La Cazada del Santo',
            },
          ],
          subtitleDayInfo: 'Enjoy the beautiful City of Santa Marta',
          textDayInfo: [
            'This city is situated on a bay by the same name and as such, it is a prime tourist destination in the Caribbean region. Enjoy it on your own pace.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 2',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature: 'Transportation from Santa Marta to Koguis',
            },
          ],
          subtitleDayInfo: 'The Ancient Kogui Settlement & Tubing Adventure',
          textDayInfo: [
            'Taironaka is a reserve specialized in ecotourism and archaeology. This area was inhabited by different indigenous tribes such as the Koguis, descendants of the Taironas.',
            'A visit to Taironaka includes an extremely fun and unique activity where you will slide down the river Don Diego and enjoy river tubing.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 4',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 3',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
      ],
    },
    {
      nameCity: 'Coffee Region',
      steps: [
        {
          infoDay: 'Day 5',
          featuresDay: [
            {
              iconFeature: '/images/general/plane.png',
              infoFeature:
                'Fly from Pereira to Santa Marta - Arrive at Simón Bolívar Airport',
            },
            {
              iconFeature: '/images/general/bed.png',
              infoFeature: 'La Cazada del Santo',
            },
          ],
          subtitleDayInfo: 'Enjoy the beautiful City of Santa Marta',
          textDayInfo: [
            'This city is situated on a bay by the same name and as such, it is a prime tourist destination in the Caribbean region. Enjoy it on your own pace.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 6',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature: 'Transportation from Santa Marta to Koguis',
            },
          ],
          subtitleDayInfo: 'The Ancient Kogui Settlement & Tubing Adventure',
          textDayInfo: [
            'Taironaka is a reserve specialized in ecotourism and archaeology. This area was inhabited by different indigenous tribes such as the Koguis, descendants of the Taironas.',
            'A visit to Taironaka includes an extremely fun and unique activity where you will slide down the river Don Diego and enjoy river tubing.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 7',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 8',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
      ],
    },
    {
      nameCity: 'Santa Marta - Tayrona',
      steps: [
        {
          infoDay: 'Day 9',
          featuresDay: [
            {
              iconFeature: '/images/general/plane.png',
              infoFeature:
                'Fly from Pereira to Santa Marta - Arrive at Simón Bolívar Airport',
            },
            {
              iconFeature: '/images/general/bed.png',
              infoFeature: 'La Cazada del Santo',
            },
          ],
          subtitleDayInfo: 'Enjoy the beautiful City of Santa Marta',
          textDayInfo: [
            'This city is situated on a bay by the same name and as such, it is a prime tourist destination in the Caribbean region. Enjoy it on your own pace.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 10',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature: 'Transportation from Santa Marta to Koguis',
            },
          ],
          subtitleDayInfo: 'The Ancient Kogui Settlement & Tubing Adventure',
          textDayInfo: [
            'Taironaka is a reserve specialized in ecotourism and archaeology. This area was inhabited by different indigenous tribes such as the Koguis, descendants of the Taironas.',
            'A visit to Taironaka includes an extremely fun and unique activity where you will slide down the river Don Diego and enjoy river tubing.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 11',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
      ],
    },
    {
      nameCity: 'Cartagena',
      steps: [
        {
          infoDay: 'Day 12',
          featuresDay: [
            {
              iconFeature: '/images/general/plane.png',
              infoFeature:
                'Fly from Pereira to Santa Marta - Arrive at Simón Bolívar Airport',
            },
            {
              iconFeature: '/images/general/bed.png',
              infoFeature: 'La Cazada del Santo',
            },
          ],
          subtitleDayInfo: 'Enjoy the beautiful City of Santa Marta',
          textDayInfo: [
            'This city is situated on a bay by the same name and as such, it is a prime tourist destination in the Caribbean region. Enjoy it on your own pace.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 13',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature: 'Transportation from Santa Marta to Koguis',
            },
          ],
          subtitleDayInfo: 'The Ancient Kogui Settlement & Tubing Adventure',
          textDayInfo: [
            'Taironaka is a reserve specialized in ecotourism and archaeology. This area was inhabited by different indigenous tribes such as the Koguis, descendants of the Taironas.',
            'A visit to Taironaka includes an extremely fun and unique activity where you will slide down the river Don Diego and enjoy river tubing.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
        {
          infoDay: 'Day 14',
          featuresDay: [
            {
              iconFeature: '/images/general/bus.png',
              infoFeature:
                'Transportation from Santa Marta to Tayrona National Park',
            },
          ],
          subtitleDayInfo: 'Enjoy Tayrona National Park',
          textDayInfo: [
            'Tayrona National Park – a sanctuary of nature and archaeological remains that invite an encounter with oneself. Mangrove swamps, corals, algae prairies, thorny scrubland, and magical dry, humid, and cloud forests proliferate and are home to a surprising variety of vegetal and animal species that bear witness to life.',

            'Flora and fauna observation are especially interesting here, especially birdwatching, which includes the threatened Andean condor. Aside from its natural and archaeological attractions, Tayrona Natural Park is a great site for eco-tourism, thanks to the diversity of its sea waves and diving sites. The Chairama archaeological site known as Pueblito and the stone paths that lead to it are very attractive to tourists.',

            'The Tayrona Natural Park is home to over 100 mammal species, among them howling monkeys, pumas, deer, and several species of bats. Over 300 bird species coexist with them, condors and lone and white eagles, being the main ones.',

            'The park is also home to 31 reptile, 15 amphibian, 202 sponge, 471 crustacean, and more than 1,000 more marine species. Dolphins and marine turtles are frequent visitors; the latter for the purpose of spawning.',
          ],
          imgDay: '/images/experiences/9.jpg',
        },
      ],
    },
  ];

  const toggleAccordion = (e) => {
    const stepsContainer =
      e.target.parentElement.parentElement.querySelector('.stepsByDays');
    if (
      e.target.parentElement.parentElement.classList.contains(styles.active)
    ) {
      stepsContainer.style.height = `${0}px`;
      e.target.parentElement.parentElement.classList.remove(styles.active);
    } else {
      const stepsNodes =
        e.target.parentElement.parentElement.querySelector(
          '.stepsByDays'
        ).children;

      let maxHeight = 0;

      for (let index = 0; index < stepsNodes.length; index++) {
        const element = stepsNodes[index];

        const styles = window.getComputedStyle(element);

        maxHeight += element.offsetHeight;
        maxHeight += parseInt(styles.marginBottom);
      }

      console.log(stepsNodes);

      stepsContainer.style.height = `${maxHeight}px`;
      e.target.parentElement.parentElement.classList.add(styles.active);
    }
  };
  return (
    <section className={`siteSection ${styles.acordionSection}`}>
      <ul className={`container ${styles.acordionContainer}`}>
        {stepsExperience.map((experience, i) => (
          <li
            key={
              typeof window !== 'undefined' ? window.crypto.randomUUID() : i
            }
            className={styles.itemExperience}>
            <div className={`${styles.topItem} flex f-sb f-ac`}>
              <div className="captureClick" onClick={toggleAccordion}></div>
              <h3 className={`${styles.cityExperience} ${Bigola.className}`}>
                {experience.nameCity}
              </h3>
              <div className={`${styles.toggleExpand} bg-ct`}></div>
            </div>
            <div className={`${styles.stepsExperience} stepsByDays`}>
              {experience.steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex f-sb f-as ${styles.singleStep} ${
                    i % 2 === 0 ? '' : styles.invert
                  }`}>
                  <div className={`${styles.infoStep}`}>
                    <h3 className={`${styles.infoDay} ${Bigola.className}`}>
                      {step.infoDay}
                    </h3>
                    <div className={`${styles.featuresDay} flex f-js f-as`}>
                      {step.featuresDay.map((feature, i) => (
                        <div
                          key={i}
                          className={`${styles.feature} flex f-s f-ac`}>
                          <div
                            className={`${styles.iconFeature} bg-ct`}
                            style={{
                              backgroundImage: `url(${feature.iconFeature})`,
                            }}></div>
                          <p className={styles.featureText}>
                            {feature.infoFeature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h3 className={`${styles.subtitleDay}`}>
                      {step.subtitleDayInfo}
                    </h3>

                    {step.textDayInfo.map((info, i) => (
                      <p key={i} className={styles.infoTextDay}>
                        {info}
                      </p>
                    ))}
                  </div>

                  <div
                    className={`${styles.imgStep} bg-cv`}
                    style={{ backgroundImage: `url(${step.imgDay})` }}></div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Acordion;
