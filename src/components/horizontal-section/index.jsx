import React, { useRef, useEffect, useContext } from 'react';
import styles from './horizontal-section.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ColombianContext } from '@/context/ColombianContext';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ horizontalType, horizontalData }) => {
  const { Bigola } = useContext(ColombianContext);
  const scroller = useRef();

  const horizontalBlocks = horizontalData;

/*
  const horizontalBlocks = [
    {
      title: 'Bogotá , Nariño, Medellín & Cartagena',
      subtitle:
        'Colombia: Experience Our Enchanted Origins, Landscapes, Architecture, and Cultural Treasures',
      content:
        'One of the biggest exporters of flowers in the world, thanks to the millions of plants blooming across the country in every color of rainbow.',
      img: '/images/home/40.jpg',
      colorLine: '#FCBE15',
      backgroundColor: '#34BBDB',
    },
    {
      title: 'Cartagena',
      subtitle: 'The Queen of the Caribbean Coast',
      content:
        'Natgeo says: "If Earth\'s biodiversity were a country, it could be called Colombia."',
      img: '/images/home/14-a.jpg',
      colorLine: '#D23250',
      backgroundColor: '#FCBE15',
    },
    {
      title: 'Amazon Adventure',
      subtitle: 'The Amazon Rainforest is the Perfect Place for Nature Lovers.',
      content:
        'Amazonian wildlife puts on a spectacular show every day, starting with the pink river dolphins that populate its waters.',
      img: '/images/home/19.jpg',
      colorLine: '#D23250',
      backgroundColor: '#AFCA0C',
    },
    {
      title: 'Caño Cristales',
      subtitle: 'The Most Beautiful River in the World',
      content:
        'Amazonian wildlife puts on a spectacular show every day, starting with the pink river dolphins that populate its waters.',
      img: '/images/home/20.jpg',
      colorLine: '#FCBE15',
      backgroundColor: '#D23250',
    },
  ];
*/

  const horizontalBlocksWorks = [
    {
      title: 'Step 1: Connect',
      content: [
        'Send us your brief travel inquiry form to get started—we’ll get back to you within 24 hours with follow up questions or to schedule a complimentary consultation.',
        'We want to make sure we gather all the details we need to customize your trip!',
      ],
      img: '/images/how-it-works/30.jpg',
      backgroundColor: '#D23250',
      invertBtn: false,
      colorText: '#ffffff',
    },
    {
      title: 'Step 2: Design',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/31.jpg',
      backgroundColor: '#FCBE15',
      invertBtn: true,
      colorText: '#7A5D0C',
    },
    {
      title: 'Step 3: Book',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/32.jpg',
      backgroundColor: '#AFCA0C',
      invertBtn: true,
      colorText: '#576409',
    },
    {
      title: 'Step 4: Depart',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/33.jpg',
      backgroundColor: '#34BBDB',
      invertBtn: true,
      colorText: '#124F5E',
    },
  ];

  const objectToIterate =
    horizontalType === 'home' ? horizontalBlocks : horizontalBlocksWorks;

  useEffect(() => {
    const blocks = gsap.utils.toArray('.itemHorizontal');
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        const to = gsap.to(blocks, {
          xPercent: () => -100 * (blocks.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scroller.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            // snap: 1 / (blocks.length - 1),

            end: () => '+=' + window.innerWidth,
          },
        });

        let changeBackground = (bg, parent) => {
          parent.classList.remove(styles.hide);
          gsap.to(scroller.current, {
            backgroundColor: bg,
          });
        };

        let blockTl;

        blocks.forEach((block, i) => {
          blockTl = gsap.to(block.querySelector('.wrapperBlock'), {
            transform: `translateX(-${
              i === blocks.length - 1 ? 0 : 0
            }%) scale(1)`,
            scrollTrigger: {
              trigger: block.querySelector('.wrapperBlock'),
              containerAnimation: to,
              start:
                i === blocks.length - 1
                  ? '-70% 0%'
                  : i === 0
                  ? '-40% 0%'
                  : 'top 80%',
              end:
                i === blocks.length - 1
                  ? '100% 95%'
                  : i === 0
                  ? '120% 80%'
                  : 'end -50%',
              scrub: 3,
              onEnter: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onEnterBack: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onLeave: (e) => {
                e.trigger._gsap.target.parentElement.classList.add(styles.hide);
              },
              onLeaveBack: (e) => {
                i === blocks.length - 1 || i === 0
                  ? ''
                  : e.trigger._gsap.target.parentElement.classList.add(
                      styles.hide
                    );
              },
              // markers: i === blocks.length - 1 ? true : false
            },
          });
        });

        return () => {
          to.kill();
          blocks.forEach((block, i) => {
            blockTl.kill();
          });
        };
      },
    });
    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        // const to = gsap.to(blocks, {
        //   xPercent: () => -100 * (blocks.length - 1),
        //   ease: 'none',
        //   scrollTrigger: {
        //     trigger: scroller.current,
        //     markers: false,
        //     pin: true,
        //     pinSpacing: true,
        //     scrub: 1,
        //     invalidateOnRefresh: true,
        //     anticipatePin: 1,
        //     // snap: 1 / (blocks.length - 1),

        //     end: () => '+=' + window.innerWidth,
        //   },
        // });

        let changeBackground = (bg, parent) => {
          parent.classList.remove(styles.hide);
          gsap.to(scroller.current, {
            backgroundColor: bg,
          });
        };

        let blockTl;

        blocks.forEach((block, i) => {
          blockTl = gsap.to(block.querySelector('.wrapperBlock'), {
            transform: `translateX(-${
              i === blocks.length - 1 ? 0 : 0
            }%) scale(1)`,
            scrollTrigger: {
              trigger: block.querySelector('.wrapperBlock'),
              // containerAnimation: to,
              start:'top 80%',
              end:'100% 0%',
              scrub: 3,
              onEnter: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onEnterBack: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
            },
          });
        });

        return () => {
          blocks.forEach((block, i) => {
            blockTl.kill();
          });
        };
      },
    });
  }, []);

  return (
    <div className={`siteSection ${styles.horizontalSection}`}>
      <div className={`${styles.containerHorizontal}`}>
        <div
          id="block"
          className={`${styles.wrapperScroller} wrapperScroller`}
          style={{
            width: `${horizontalBlocks.length * 100}vw`,
            backgroundColor: '#34BBDB',
          }}
          ref={scroller}>
          {objectToIterate.map((block, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.block} itemHorizontal itemHorizontal-${i}`}
              data-bg={block.backgroundColor}>
              <div className={`${styles.wrapperBlock} wrapperBlock`}>
                <div
                  className={`${styles.contentItemHorizontal} ${styles.contentItemHorizontalWork}`}>
                  {horizontalType === 'home' && (
                    <>
                      <h2
                        className={`${styles.titleBlock} ${Bigola.className}`}>
                        {block.title}
                      </h2>
                      <div className={styles.wrapperSubtitle}>
                        {block.colorLine && (
                          <div
                            className={styles.lineSubtitle}
                            style={{ backgroundColor: block.colorLine }}></div>
                        )}

                        <h3 className={styles.subtitleBlock}>
                          {block.subtitle}
                        </h3>
                      </div>

                      <div
                        className={styles.infoItemHorizontal}
                        style={{ backgroundColor: block.backgroundColor }}>
                        <p className={`${styles.number}`}>0{i + 1}</p>
                        <p className={styles.detailItemHorizontal}>
                          {block.content}
                        </p>
                      </div>
                    </>
                  )}

                  {horizontalType === 'works' && (
                    <>
                      <div className={styles.infoWork}>
                        <h2
                          className={`${styles.titleBlock} ${styles.titleBlockWork} ${Bigola.className}`}>
                          {block.title}
                        </h2>

                        <div className={styles.innerInfoWork}>
                          {block.content.map((text, i) => (
                            <p
                              key={
                                typeof window !== 'undefined'
                                  ? window.crypto.randomUUID()
                                  : i
                              }
                              className={styles.textWork}
                              style={{ color: block.colorText }}>
                              {text}
                            </p>
                          ))}
                        </div>

                        <div
                          className={`${styles.goTrip} ${
                            block.invertBtn ? styles.invertColors : ''
                          }`}>
                          <div className={`${styles.arrowIcon} bg-ct`}></div>
                          <p
                            className={styles.textBtn}
                            style={{ color: block.colorText }}>
                            YOUR TRIP
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className={`bg-cv imgItem imgItem-${i} ${
                    styles.imgItemHorizontal
                  } ${horizontalType === 'works' && styles.worksImg}`}
                  style={{ backgroundImage: `url(${block.img.sizes?block.img.sizes.large:''})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSection;
