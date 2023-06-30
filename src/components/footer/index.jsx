import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styles from './footer.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({ datafooter, changeLayout }) => {
  const {
    footermenu,
    disclaimer,
    privacylink,
    termslink,
    formtitle,
    phone,
    email,
    copiright,
    formtext,

  } = datafooter;
  const { Bigola } = useContext(ColombianContext);

  useEffect(() => {
    AOS.init({});
  }, []);

  const sendDataForm = async (event) => {
    event.preventDefault();
    const name = event.target.querySelector('#f_name').value;
    const email = event.target.querySelector('#f_email').value;
    const message = event.target.querySelector('#f_message').value;

    if (!name) {
      alert('Please enter your name.');
      return false;
    }

    if (!email) {
      alert('Please enter your Email.');
      return false;
    }

    if (!message) {
      alert('Please enter your Message.');
      return false;
    }

    const formData = new FormData();
    formData.append('fname', name);
    formData.append('femail', email);
    formData.append('fmessage', message);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer`;

    const options = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    const errorDiv = event.target.querySelector('#messageForm');
    errorDiv.innerHTML = result.status;
    event.target.reset();
    setTimeout(() => {
      errorDiv.innerHTML = '';
    }, 3000);

    // alert(result.status);
    console.log('Success:', result.status);
  };

  if (!datafooter) {
    return <></>;
  }

  return (
    <>
      <section className={`${styles.siteContact} siteContact bg-cv`}>
        <div className={`container ${styles.containerContact}`}>
          {!changeLayout && (
            <>
              <h2
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="0"
                className={`${styles.contactTitle} ${Bigola.className}`}
                dangerouslySetInnerHTML={{ __html: formtitle }}
              />
              <div className={`${styles.contactContainer} flex f-sb f-as`}>
                <div className={styles.infoContact}>
                  {phone.length > 0 && (
                    <div className={styles.infoContactGroup}>
                      <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className="iconPhone bg-ct"></div>
                      <div className={styles.phoneGroup}>
                        {phone.map((phoneObj, i) => (
                          <a
                            key={`phone${i}`}
                            data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="0"
                            className={styles.contactCta}
                            href={phoneObj.numlink}>
                            {phoneObj.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {email.length > 0 && (
                    <div className={styles.infoContactGroup}>
                      <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className="iconMail bg-ct"></div>
                      <div className={styles.phoneGroup}>
                        {email.map((mailObj, i) => (
                          <a
                            key={`mail${i}`}
                            data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="0"
                            className={styles.contactCta}
                            href={mailObj.numlink}>
                            {mailObj.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <form className={styles.formFooter} onSubmit={sendDataForm}>
                  <input
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    type="text"
                    name=""
                    id="f_name"
                    className={`${styles.filedForm} ${styles.inputForm}`}
                    placeholder="Full Name"
                  />
                  <input
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    type="text"
                    name=""
                    id="f_email"
                    className={`${styles.filedForm} ${styles.inputForm}`}
                    placeholder="Email Address"
                  />
                  <textarea
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    name=""
                    id="f_message"
                    className={`${styles.filedForm} ${styles.textareaForm}`}
                    placeholder="Message"></textarea>
                  <p id="messageForm"></p>
                  <div className={styles.submitGroup}>
                    <button className={styles.innerSubmitGroup}>
                      <div
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className={`${styles.arrowSubmit} bg-ct`}></div>
                      <p
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className={styles.submitText}>
                        SUBMIT
                      </p>
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {changeLayout && (
            <>
            <div className={`container`}>
            <h2
              className={`${styles.titleProud} ${Bigola.className}`}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              dangerouslySetInnerHTML={{ __html: formtitle }}></h2>
            <h3
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={styles.subtitleProudMembers}
              dangerouslySetInnerHTML={{ __html: formtext }}></h3>
          </div>
            <form className={`${styles.formFooterB} formB`}>
              <div className={styles.inputsGroup}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Name*
                </p>
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="First Name"
                />
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="Last Name"
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.longInput}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Email*
                </p>
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="text"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Approximated Duration Days
                </p>
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Number of Travelers
                </p>
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                />
              </div>
              <div
                className={`${styles.inputsGroup} ${styles.shortGroup} ${styles.dateInput}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Approximated Start date
                </p>
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="month"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="MM"
                />
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="DD"
                  max={31}
                  min={1}
                />
                <input
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  type="number"
                  name=""
                  id=""
                  className={`${styles.filedForm} ${styles.inputForm}`}
                  placeholder="YYYY"
                />
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Your Travel Style
                </p>
                <select
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.selectInput}
                  name=""
                  id=""></select>
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Accomodation
                </p>
                <select
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.selectInput}
                  name=""
                  id=""></select>
              </div>
              <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                <p
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.labelTextInputs}>
                  Your Destination
                </p>
                <select
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={styles.selectInput}
                  name=""
                  id=""></select>
              </div>

              <div className={styles.submitGroup}>
                <button className={styles.innerSubmitGroup}>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={`${styles.arrowSubmit} bg-ct`}></div>
                  <p
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={styles.submitText}>
                    SUBMIT
                  </p>
                </button>
              </div>
            </form>
            </>
          )}
        </div>
      </section>

      <footer className={`${styles.siteFooter} siteFooter`}>
        <div className={`container ${styles.containerFooter}`}>
          <div className={styles.headerFooter}>
            <div className={styles.yellowLine}></div>
            <div className={`${styles.logoFooter} bg-ct`}></div>
            <div className={styles.yellowLine}></div>
          </div>
          {footermenu.length > 0 && (
            <nav className={styles.footerNav}>
              {footermenu.map((item, i) => (
                <Link
                  key={`itemmenu${i}`}
                  target={item.target}
                  href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${item.link}`}
                  className={`${styles.itemFooterNav} ${styles.withPoint}`}>
                  {item.label}{' '}
                  {i < footermenu.length - 1 && (
                    <span className={styles.divisorPoint}></span>
                  )}
                </Link>
              ))}
            </nav>
          )}
          {disclaimer !== '' && (
            <p className={styles.infoRegister}>{disclaimer}</p>
          )}
          <div className={styles.legalItems}>
            <Link
              href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${privacylink}`}
              className={styles.copyrightText}>
              Privacy Policy
            </Link>
            <p className={styles.copyrightText}>© {copiright}</p>
            <Link
              href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${termslink}`}
              className={styles.copyrightText}>
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
