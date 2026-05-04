import styles from "./partner.module.css";
import logo from "../../../assets/images/parntner1.svg";
import logo2 from "../../../assets/images/partner2.svg";
import logo3 from "../../../assets/images/partner3.svg";
import logo4 from "../../../assets/images/partner4.svg";
import logo5 from "../../../assets/images/partner5.svg";

const Partner = () => {
  const rawLogos = [logo, logo2, logo3, logo4, logo5];

  const logos = [...rawLogos, ...rawLogos, ...rawLogos];

  return (
    <section className={styles.partners}>
      <div className={styles.group}>
        {logos.map((l, index) => (
          <div key={`g1-${index}`} className={styles.card}>
            <img src={l} alt="partner" />
          </div>
        ))}
      </div>

      <div aria-hidden="true" className={styles.group}>
        {logos.map((l, index) => (
          <div key={`g2-${index}`} className={styles.card}>
            <img src={l} alt="partner" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
