import styles from "./hero.module.css";

// images
import emojiImg from "../../../assets/icons/hero-emoji.png";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroDesc}>
        <h2 className="text">
          ― Hello, I'm Rakhimov <img src={emojiImg} alt="image" />
        </h2>
        <h1 className="title">
          Web Developer & Interactive Experience Engineer
        </h1>
        <p className="text">
          A front-end developer and creative coder dedicated to building <br className="br" />
          high-performance and seamless digital interfaces.
        </p>

        <div className={styles.heroBtns}>
          <Button to="#contact" className="title" variant="filled">
            Get In Touch
          </Button>
          <Button to="#portfolio" variant="transparent" className="title">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
