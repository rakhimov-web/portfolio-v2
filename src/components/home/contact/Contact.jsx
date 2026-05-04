import { useState } from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import styles from "./contact.module.css";
import Button from "../../common/Button";

const Contact = () => {
  const [alert, setAlert] = useState({
    show: false,
    isLeaving: false,
    type: "",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ show: true, isLeaving: false, type, message });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, isLeaving: true }));
    }, 2000);

    setTimeout(() => {
      setAlert({ show: false, isLeaving: false, type: "", message: "" });
    }, 2300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const token = "8239365513:AAGQY9AcMRvVGO2T7tEg1qtRX3L6990sqMI";
    const chatId = "5379497693";

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("tel") || "N/A",
      message: formData.get("message"),
    };

    const text = `<b>New Inquiry</b>\n<b>━━━━━━━━━━━━━━</b>\n<b>👤 Name:</b> ${data.name}\n<b>📧 Email:</b> ${data.email}\n<b>📞 Phone:</b> ${data.tel}\n<b>💬 Message:</b>\n${data.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "HTML",
          }),
        },
      );

      if (response.ok) {
        showAlert("success", "Sent");
        form.reset();
      } else {
        showAlert("error", "Error");
      }
    } catch (error) {
      showAlert("error", "Error");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      {alert.show && (
        <div
          className={`${styles.alertContainer} ${alert.isLeaving ? styles.leaving : styles.entering}`}
        >
          <div className={`${styles.alertBox} ${styles[alert.type]}`}>
            {alert.type === "success" ? (
              <FiCheckCircle className={styles.alertIcon} />
            ) : (
              <FiAlertCircle className={styles.alertIcon} />
            )}
            <span className={`text ${styles.alertMessage}`}>
              {alert.message}
            </span>
          </div>
        </div>
      )}

      <div className={styles.top}>
        <h1 className="title">Get in Touch</h1>
        <p className="text">
          Have a project in mind? Fill out the form below and our team will get
          back to you within 24 hours.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <legend className="title">
            Full name <span>*</span>
          </legend>
          <input
            required
            name="name"
            className="text"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className={styles.email}>
          <legend className="title">
            Email address <span>*</span>
          </legend>
          <input
            required
            name="email"
            className="text"
            type="email"
            placeholder="example@mail.com"
          />
        </div>

        <div className={styles.tel}>
          <legend className="title">
            Phone number <span>(optional)</span>
          </legend>
          <input
            name="tel"
            className="text"
            type="tel"
            placeholder="+998 90 123 45 67"
          />
        </div>

        <div className={styles.message}>
          <legend className="title">
            Message <span>*</span>
          </legend>
          <textarea
            required
            className="text"
            name="message"
            placeholder="Describe your project or inquiry..."
          />
        </div>

        <Button type="submit" className="title" variant="filled">
          Submit Inquiry
        </Button>
      </form>
    </section>
  );
};

export default Contact;
