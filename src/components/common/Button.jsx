import styles from "./button.module.css";

const Button = ({
  children,
  to,
  variant = "filled",
  className = "",
  offset = -70,
  disabled = false,
  target = "_blank",
  rel = "noopener noreferrer",
  type = "button", // Default holatda button, submit uchun props orqali o'zgartirish mumkin
}) => {
  const isExternal = typeof to === "string" && to.startsWith("http");
  const isScrollLink = typeof to === "string" && to.startsWith("#");

  const buttonClasses = `${styles.button} ${styles[variant]} ${className} ${
    disabled ? styles.disabled : ""
  }`;

  const handleScroll = (e) => {
    if (isScrollLink && window.lenis) {
      e.preventDefault();
      const targetElement = document.querySelector(to);
      if (targetElement) {
        window.lenis.scrollTo(targetElement, {
          offset: offset,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };

  if (isExternal) {
    return (
      <a href={to} className={buttonClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={isScrollLink ? handleScroll : undefined}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
