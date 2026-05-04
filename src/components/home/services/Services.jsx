import styles from "./services.module.css";
import Button from "../../common/Button";

// images
import image1 from "../../../assets/icons/services1.svg";
import image2 from "../../../assets/icons/services2.svg";
import image3 from "../../../assets/icons/services3.svg";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      {/* services quiote */}
      <div className={styles.servicesQuote}>
        <h1 className="title">
          Turning Complex Challenges into High-Performance Digital Realities.
        </h1>

        {/* circles */}
        <div className={styles.circleWrapper}>
          {/* circle */}
          <div className={styles.circle}>
            <h3 className="title">01+</h3>
            <p className="text">Experience</p>
          </div>
          {/* circle */}
          <div className={`${styles.circle} ${styles.mark}`}>
            <h3 className="title">06+</h3>
            <p className="text">Project Done</p>
          </div>
        </div>
      </div>

      {/* services main cards */}
      <div className={styles.servcesMain}>
        <h1 className="title">Digital Services I <br className="br" /> am Providing</h1>

        {/* cards */}
        <div className={styles.cards}>
          {/* card */}
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={image1} alt="image" />
            </div>
            <h3 className="title">Web Development</h3>
            <p className="text">
              Building high-performance web applications using React, focusing
              on clean architecture and scalable code for modern digital
              solutions.
            </p>
          </div>

          {/* card */}
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={image2} alt="image" />
            </div>
            <h3 className="title">Interactive Design</h3>
            <p className="text">
              Crafting intuitive user interfaces and seamless experiences that
              bridge the gap between aesthetics and functional digital products.
            </p>
          </div>

          {/* card */}
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={image3} alt="image" />
            </div>
            <h3 className="title">Performance Optimization</h3>
            <p className="text">
              Specializing in smooth scroll integrations and speed optimization
              to ensure your website runs fluidly across all modern browsers.
            </p>
          </div>
        </div>

        <div className={styles.serviceBtn}>
          <Button to="#contact" className="title" variant="filled">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
