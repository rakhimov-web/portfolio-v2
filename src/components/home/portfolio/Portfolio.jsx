import Button from "../../common/Button";
import styles from "./portfolio.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

// images
import image1 from "../../../assets/images/project-img1.webp";
import image2 from "../../../assets/images/project-img2.webp";
import image3 from "../../../assets/images/project-img3.webp";
import image4 from "../../../assets/images/project-img4.webp";

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      {/* portfolio title */}
      <div className={styles.portfolioTop}>
        <h1 className="title">Featured Works & Digital <br className="br" /> Crafts</h1>
        <Button
          className={`title ${styles.button}`}
          variant="transparent"
          to="https://github.com/iamabdurahmon"
        >
          View All Porject
        </Button>
      </div>

      {/* portfolio cards */}
      <div className={styles.cards}>
        {/* portfolio card */}
        <div className={styles.card}>
          <a href="https://nomadix-xi.vercel.app/" target="_blank">
            <div className={styles.image}>
              <img src={image1} alt="image" />
            </div>
          </a>
          <div className={styles.cardInfo}>
            <h3 className="title">Nomadix - Luxury Travel Experience</h3>
            <p className="text">
              A premium exploration platform designed for discovering the
              world's most exotic beaches and hidden travel destinations.
            </p>

            <div className={styles.tools}>
              <span className="text">React</span>
              <span className="text">SCSS</span>
              <span className="text">JavaScript</span>
            </div>

            <a
              className={styles.btn}
              href="https://nomadix-xi.vercel.app/"
              target="_blank"
            >
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>

        {/* portfolio card */}
        <div className={styles.card}>
          <a href="https://github.com/iamabdurahmon" target="_blank">
            <div className={styles.image}>
              <img src={image2} alt="image" />
            </div>
          </a>
          <div className={styles.cardInfo}>
            <h3 className="title">Scappa - Digital Banking Solutions</h3>
            <p className="text">
              A modern fintech landing page featuring seamless transaction
              tracking, personalized financial tools, and high-security banking
              assets.
            </p>

            <div className={styles.tools}>
              <span className="text">Tailwind</span>
              <span className="text">TypeScript</span>
            </div>

            <a
              className={styles.btn}
              href="https://github.com/iamabdurahmon"
              target="_blank"
            >
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>

        {/* portfolio card */}
        <div className={styles.card}>
          <a href="https://github.com/iamabdurahmon" target="_blank">
            <div className={styles.image}>
              <img src={image3} alt="image" />
            </div>
          </a>
          <div className={styles.cardInfo}>
            <h3 className="title">MediCare - Digital Health Ecosystem</h3>
            <p className="text">
              A comprehensive healthcare landing page designed to streamline
              patient care, doctor consultations, and medical resource
              management.
            </p>

            <div className={styles.tools}>
              <span className="text">Python</span>
              <span className="text">React</span>
              <span className="text">Tailwind</span>
            </div>

            <a
              className={styles.btn}
              href="https://github.com/iamabdurahmon"
              target="_blank"
            >
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>

        {/* portfolio card */}
        <div className={styles.card}>
          <a href="https://github.com/iamabdurahmon" target="_blank">
            <div className={styles.image}>
              <img src={image4} alt="image" />
            </div>
          </a>
          <div className={styles.cardInfo}>
            <h3 className="title">Keyvo - Next-Gen Automotive Platform</h3>
            <p className="text">
              A modular underwriting engine built for modern vehicle access,
              featuring automated financing flows and real-time risk assessment.
            </p>

            <div className={styles.tools}>
              <span className="text">React</span>
              <span className="text">CSS</span>
            </div>

            <a
              className={styles.btn}
              href="https://github.com/iamabdurahmon"
              target="_blank"
            >
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
