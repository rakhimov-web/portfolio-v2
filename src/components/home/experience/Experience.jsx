import styles from "./experience.module.css";
import image1 from "../../../assets/icons/experience1.svg";
import image2 from "../../../assets/icons/experience2.svg";
import image3 from "../../../assets/icons/experience3.svg";
import image4 from "../../../assets/icons/experience4.svg";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h1 className="title">My Professional Journey</h1>
      <p className="text">
        A roadmap of my technical evolution, from mastering fundamentals to <br className="br" />
        building complex digital solutions from Namangan.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={image1} alt="Foundations" />
          <p className={`title ${styles.date}`}>2022 - 2023</p>
          <h3 className="title">IT Foundations | IlmHub</h3>
          <p className={`text ${styles.cardText}`}>
            Started my journey by exploring Computer Science fundamentals.
            Developed a strong logical base through algorithm design and
            practical programming in Python and C++.
          </p>
        </div>

        <div className={styles.card}>
          <img src={image2} alt="English" />
          <p className={`title ${styles.date}`}>2023 - 2025</p>
          <h3 className="title">English & Communication | Ziyokor</h3>
          <p className={`text ${styles.cardText}`}>
            Focused on advanced English and IELTS preparation to effectively
            collaborate with international teams and master global technical
            documentation.
          </p>
        </div>

        <div className={styles.card}>
          <img src={image3} alt="Frontend" />
          <p className={`title ${styles.date}`}>2025 - Present</p>
          <h3 className="title">Frontend Development | Algoritm</h3>
          <p className={`text ${styles.cardText}`}>
            Mastered modern React ecosystems, focusing on high-performance
            interfaces, smooth animations, and optimized user experiences using
            the latest web standards.
          </p>
        </div>

        <div className={styles.card}>
          <img src={image4} alt="Fullstack" />
          <p className={`title ${styles.date}`}>Future Focused</p>
          <h3 className="title">Advanced Full-Stack Systems</h3>
          <p className={`text ${styles.cardText}`}>
            Currently diving deep into backend architectures and database
            management to build scalable, end-to-end web applications and robust
            server-side solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
