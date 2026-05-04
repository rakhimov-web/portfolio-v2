import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "./accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      id: 1,
      question: "How do you handle project communication and updates?",
      answer:
        "I maintain transparent communication through Telegram or your preferred platform. I provide regular live demos during major updates to ensure the project aligns perfectly with your vision and requirements.",
    },
    {
      id: 2,
      question: "Do you offer support if bugs appear after the launch?",
      answer:
        "Yes, I stand behind my work. I provide a post-launch support period where I fix any technical bugs or functional errors for free to ensure your website operates smoothly.",
    },
    {
      id: 3,
      question: "How do you ensure high performance and site speed?",
      answer:
        "I use the latest industry-standard technologies and optimize every element. From image compression to clean code architecture, every component undergoes a strict filtering process to ensure maximum loading speed.",
    },
    {
      id: 4,
      question: "Are you comfortable working within a development team?",
      answer:
        "Absolutely. I have a solid understanding of Version Control (Git/GitHub) and collaborative workflows. I can easily integrate into a team environment and contribute effectively to collective goals.",
    },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.accordion} id="accordion">
      {/* accordion top */}
      <div className={styles.accordionTop}>
        <h1 className="title">What Clients Normally Ask</h1>
        <p className="text">
          A digital designer and creative developer from Uzbekistan passionate
          about creating memorable experiences.
        </p>
      </div>

      {/* accordion questions */}
      <div className={styles.cards}>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.cardHeader}>
              <h3 className={`title ${styles.question}`}>{item.question}</h3>
              <div className={styles.icon}>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={styles.content}>
              <p className={` text ${styles.answer}`}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
