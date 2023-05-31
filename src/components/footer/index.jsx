import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './footer.module.css';

const Footer = ({ datafooter, changeLayout }) => {
  const {footermenu,disclaimer,privacylink,termslink,formtitle,phone,email,copiright} = datafooter;
  const { Bigola } = useContext(ColombianContext);
  return (
    <>
      <section className={`${styles.siteContact} bg-cv`}>
        <div className={`container ${styles.containerContact}`}>
          {!changeLayout && (
            <>
              <h2 className={`${styles.contactTitle} ${Bigola.className}`} dangerouslySetInnerHTML={{__html:formtitle}} />
              <div className={`${styles.contactContainer} flex f-sb f-as`}>
                <div className={styles.infoContact}>
                  {phone.length>0 && (
                    <div className={styles.infoContactGroup}>
                      <div className="iconPhone bg-ct"></div>
                      <div className={styles.phoneGroup}>
                        {phone.map((phoneObj,i)=>(
                          <a key={'phone'+i} className={styles.contactCta} href={phoneObj.numlink}>
                            {phoneObj.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {email.length>0 && (
                    <div className={styles.infoContactGroup}>
                      <div className="iconMail bg-ct"></div>
                      <div className={styles.phoneGroup}>
                        {email.map((emailObj,i)=>(
                          <a key={'mail'+i}
                            className={styles.contactCta}
                            href={emailObj.numlink}>
                            {emailObj.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <form className={styles.formFooter}>
                  <input
                    type="text"
                    name=""
                    id=""
                    className={`${styles.filedForm} ${styles.inputForm}`}
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className={`${styles.filedForm} ${styles.inputForm}`}
                    placeholder="Email Address"
                  />
                  <textarea
                    name=""
                    id=""
                    className={`${styles.filedForm} ${styles.textareaForm}`}
                    placeholder="Message"></textarea>
                </form>
              </div>
            </>
          )}

          {changeLayout && (
            <form className={styles.formFooterB}>
              <div className={styles.inputsGroup}>
                <p className={styles.labelTextInputs}>Name*</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="Last Name"
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.longInput}`}>
                <p className={styles.labelTextInputs}>Email*</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p className={styles.labelTextInputs}>
                  Approximated Duration Days
                </p>
                <input
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p className={styles.labelTextInputs}>Number of Travelers</p>
                <input
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div
                className={`${styles.inputsGroup} ${styles.shortGroup} ${styles.dateInput}`}>
                <p className={styles.labelTextInputs}>
                  Approximated Start date
                </p>
                <input
                  type="month"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="MM"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="DD"
                  max={31}
                  min={1}
                />
                <input
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="YYYY"
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p className={styles.labelTextInputs}>Your Travel Style</p>
                <select className={styles.selectInput} name="" id=""></select>
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p className={styles.labelTextInputs}>Accomodation</p>
                <select className={styles.selectInput} name="" id=""></select>
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p className={styles.labelTextInputs}>Your Destination</p>
                <select className={styles.selectInput} name="" id=""></select>
              </div>

              <div className={styles.submitGroup}>
                <button className={styles.innerSubmitGroup}>
                  <div className={`${styles.arrowSubmit} bg-ct`}></div>
                  <p className={styles.submitText}>SUBMIT</p>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className={`${styles.siteFooter}`}>
        <div className={`container ${styles.containerFooter}`}>
          <div className={styles.headerFooter}>
            <div className={styles.yellowLine}></div>
            <div className={`${styles.logoFooter} bg-ct`}></div>
            <div className={styles.yellowLine}></div>
          </div>
          {footermenu.length>0&&(
            <nav className={styles.footerNav}>
              {footermenu.map((item,i)=>(
                 <Link
                  key={'itemmenu'+i}
                  target={item.target}
                  href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${item.link}`}
                  className={`${styles.itemFooterNav} ${styles.withPoint}`}>
                  {item.label} {i<(footermenu.length-1) && (<span className={styles.divisorPoint}></span>)}
                </Link>
              ))}
            </nav>
          )}
          {disclaimer!==''&&(
            <p className={styles.infoRegister}>
              {disclaimer}
            </p>
          )}
          <div className={styles.legalItems}>
            <Link href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${privacylink}`} className={styles.copyrightText}>
              Privacy Policy
            </Link>
            <p className={styles.copyrightText}>© {copiright}</p>
            <Link href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${termslink}`} className={styles.copyrightText}>
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className={styles.paperplaneContainer}>
          <p className={styles.designedText}>Designed by:</p>
          <div className={`${styles.paperplaneLog} bg-ct`}>
            <a
              href="https://paperplane.com.co"
              target="_blank"
              rel="noreferrer"></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
