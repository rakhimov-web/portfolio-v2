import styles from "./footer.module.css";
import Button from ".../../../src/components/common/Button";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div className={styles.wrapper}>
        {/* footer title */}
        <div className={styles.title}>
          <h1 className="title">Got a Project? I am Available Let's Talk</h1>
        </div>

        <div className={styles.footerMain}>
          <p className="text">
            I am available to work on your awesome projects. A creative developer from Uzbekistan passionate about creating
            memorable experiences.
          </p>

          <div className={styles.social}>
            <h3 className="text">Follow Me</h3>
            <div className={styles.icons}>
              <a
                title="instagram"
                target="_blank"
                href="https://www.instagram.com/rahimoff.o1"
              >
                <FaInstagram />
              </a>
              <a
                title="telegram"
                target="_blank"
                href="https://t.me/iamabdurahmon"
              >
                <FaTelegramPlane />
              </a>
              <a title="Dev.to" target="_blank" href="https://dev.to/rakhimov">
                <BiLogoDevTo />
              </a>
              <a
                title="github"
                target="_blank"
                href="https://github.com/iamabdurahmon"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <hr />
        <p className="text">
          &copy; {new Date().getFullYear()} Rakhimov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
