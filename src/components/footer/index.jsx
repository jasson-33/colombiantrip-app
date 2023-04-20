import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './footer.module.css';

const Footer = ({ changeLayout }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <>
      <section className={`${styles.siteContact} bg-cv`}>
        <div className={`container ${styles.containerContact}`}>
          {!changeLayout && (
            <>
              <h2 className={`${styles.contactTitle} ${Bigola.className}`}>
                Let’s start <br /> your journey
              </h2>

              <div className={`${styles.contactContainer} flex f-sb f-as`}>
                <div className={styles.infoContact}>
                  <div className={styles.infoContactGroup}>
                    <div className="iconPhone bg-ct"></div>
                    <div className={styles.phoneGroup}>
                      <a className={styles.contactCta} href="tel:+13109880887">
                        +1 (310) 988 0887 US
                      </a>
                      <a className={styles.contactCta} href="tel:+573142174891">
                        +57 (314) 217 4891 Colombia
                      </a>
                    </div>
                  </div>
                  <div className={styles.infoContactGroup}>
                    <div className="iconMail bg-ct"></div>
                    <a
                      className={styles.contactCta}
                      href="mailto:customerservice@thecolombiantrio.com">
                      customerservice@thecolombiantrio.com
                    </a>
                  </div>
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

          <nav className={styles.footerNav}>
            <Link
              href="/"
              className={`${styles.itemFooterNav} ${styles.withPoint}`}>
              About us <span className={styles.divisorPoint}></span>
            </Link>
            <Link href="/" className={`${styles.itemFooterNav} `}>
              Experience <span className={styles.divisorPoint}></span>
            </Link>
            <Link
              href="/"
              className={`${styles.itemFooterNav} ${styles.withPoint}`}>
              How it works <span className={styles.divisorPoint}></span>
            </Link>
            <Link href="/" className={`${styles.itemFooterNav} `}>
              Meet Colombia <span className={styles.divisorPoint}></span>
            </Link>
            <Link
              href="/"
              className={`${styles.itemFooterNav} ${styles.withPoint}`}>
              Get in touch <span className={styles.divisorPoint}></span>
            </Link>
            <Link href="/" className={`${styles.itemFooterNav} `}>
              B2B
            </Link>
          </nav>

          <p className={styles.infoRegister}>
            Registro Nacional de Turismo Colombia # 96714 / California Sellers
            of Travel # 2137640-70
          </p>

          <div className={styles.legalItems}>
            <Link href="/" className={styles.copyrightText}>
              Privacy Policy
            </Link>
            <p className={styles.copyrightText}>© 2023 The Colombian Trip</p>
            <Link href="/" className={styles.copyrightText}>
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
