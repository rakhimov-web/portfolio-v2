import { useState } from "react";
import styles from "./navbar.module.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.querySelector(id);

    if (element && window.lenis) {
      if (isOpen) toggleMenu();

      window.lenis.scrollTo(element, {
        offset: -70,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.5,
      });
    }
  };

  return (
    <section>
      <div className={styles.header}>
        <div
          className={styles.logo}
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <span className="text">rakhimov.</span>
          <span className={`text ${styles.mark}`}>Developer</span>
        </div>

        <div className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
          <nav>
            <ul>
              <li>
                <span
                  className="text"
                  onClick={() => handleScroll("#accordion")}
                >
                  About Me
                </span>
              </li>
              <li>
                <span
                  className="text"
                  onClick={() => handleScroll("#services")}
                >
                  Services
                </span>
              </li>
              <li>
                <span
                  className="text"
                  onClick={() => handleScroll("#portfolio")}
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span className="text" onClick={() => handleScroll("#contact")}>
                  Contact
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <span className={styles.menuBtn} onClick={toggleMenu}>
          {isOpen ? <VscClose /> : <HiOutlineBars3 />}
        </span>
      </div>

      <div className={`${styles.navMobile} ${isOpen ? styles.active : ""}`}>
        <nav>
          <ul>
            <li>
              <span className="text" onClick={() => handleScroll("#accordion")}>
                About Me
              </span>
            </li>
            <li>
              <span className="text" onClick={() => handleScroll("#services")}>
                Services
              </span>
            </li>
            <li>
              <span className="text" onClick={() => handleScroll("#portfolio")}>
                Portfolio
              </span>
            </li>
            <li>
              <span className="text" onClick={() => handleScroll("#contact")}>
                Contact
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
