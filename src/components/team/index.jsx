import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './team.module.css';

const Team = ({teamData}) => {
  const { Bigola } = useContext(ColombianContext);
  const members = teamData;

  return (
    <section className={`siteSection ${styles.teamSection}`}>
      <div className={`container flex f-s f-as ${styles.containerTeam}`}>
        {members.map((member, i) => (
          <div key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i} className={styles.cardTeam}>
            <div className={`${styles.imgTeamMember}`}>
              <img src={member.img.sizes?member.img.sizes.medium:''} className={styles.innerImgTeamMember} />
              <div className={styles.hideInfo}>
                <p className={styles.infoTeamMember} dangerouslySetInnerHTML={{__html:member.info}} />
              </div>
            </div>
            <h2 className={` ${Bigola.className} ${styles.teamMemberName}`} dangerouslySetInnerHTML={{__html:member.name}} />
            <h3 className={`${styles.teamMemberRol}`} dangerouslySetInnerHTML={{__html:member.rol}} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
