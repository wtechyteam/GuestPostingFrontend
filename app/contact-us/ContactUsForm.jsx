import React from 'react';
import MyForm from './MyForm';

const ContactUS = () => {
  return (
    <>
     

      <section className={`sectionPadding`}>
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold">Get in touch</h2>
              <p>
                Let us know what challenge you are facing, and we are ready to
                provide a solution. Connect with us here.
              </p>
              <div className="">
                <ul className="contact_usInfo ps-0">
                  <li>
                    <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                    <div>
                      <h5>Corporate Head Office</h5>
                      <p>
                        HSIIDC IT Park, Plot No 6, 7th Floor, Behind Gurudwara
                        Nada Sahib, Sector 22, Panchkula, Haryana 134109
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                    <div>
                      <h5>Corporate Office Chandigarh</h5>
                      <p>
                        SCO 85-86, 1st Floor, near PESCO Office, Sector 34A,
                        Sector 34, Chandigarh, 160022
                      </p>
                    </div>
                  </li> */}
                  <li>
                    <i className="fa-solid fa-phone me-3 mt-1"></i>
                    <p>
                      <a href="tel:+91-6283857196" title="+91-6283857196">
                        +91-6283857196
                      </a>
                      ,{" "}
                      <a href="tel:+91-7717505073" title="+91-7717505073">
                        +91-7717505073
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope me-3 mt-1"></i>
                    <a href="mailto:info@wtechy.com" title="info@wtechy.com">
                      info@wtechy.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <MyForm />
            </div>
          </div>
        </div>
      </section>
      <section className="mapSection2">
        <iframe
          title="Wtechy location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13723.644298125762!2d76.8804396!3d30.692777999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95aff8afacf5%3A0xbb1c0711c52f5d2e!2sWTechy%20-%20Digital%20Marketing%2C%20SEO%20%26%20Web%20Design!5e0!3m2!1sen!2sin!4v1712661201421!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUS;