import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './team.module.css';

const Team = () => {
  const { Bigola } = useContext(ColombianContext);
  const members = [
    {
      name: 'Sebastian Rodríguez',
      rol: 'CEO',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/6.png',
    },
    {
      name: 'Andrea Morita',
      rol: 'Founder & Sales Director',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/7.png',
    },
    {
      name: 'Wendy Romero',
      rol: 'Sales Manager',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/8.png',
    },
    {
      name: 'Margarita Moreno',
      rol: 'Travel Counselor',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/9.png',
    },
    {
      name: 'Dean Romero',
      rol: 'Travel Counselor',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/10.png',
    },
    {
      name: 'Karen Soler',
      rol: 'Operations Coodinator',
      info: [
        'Hi! I’m Sebastian Rodriguez and welcome to my beautiful country! My passion for what I have seen made me take the decision to study Hotel and Tour ism Business Administration.',
        ' What a great decision! I’ve shown Colombia to more than 4000 travelers for around 12 years and it’s amazing to see how through my passion I’ve been the opportunity to share the beauty and the smiles of the people, and the breathtaking sceneries of Colombia.',
        'But this is not over! I’m looking every day for new stories and hidden gems, so be prepared to see more amazing places!',
      ],
      img: '/images/about/11.png',
    },
  ];
  return (
    <section className={`siteSection ${styles.teamSection}`}>
      <div className={`container flex f-s f-as ${styles.containerTeam}`}>
        {members.map((member, i) => (
          <div key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i} className={styles.cardTeam}>
            <div className={`${styles.imgTeamMember}`}>
              <img src={member.img} className={styles.innerImgTeamMember} />
              <div className={styles.hideInfo}>
                {member.info.map((text, i) => (
                  <p className={styles.infoTeamMember} key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <h2 className={` ${Bigola.className} ${styles.teamMemberName}`}>
              {member.name}
            </h2>
            <h3 className={`${styles.teamMemberRol}`}>{member.rol}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
