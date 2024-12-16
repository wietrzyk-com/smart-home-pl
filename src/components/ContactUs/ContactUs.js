import React, { useState } from "react";
import "./ContactUs.scss";
import validator from "validator";
import { isValidNumber, parsePhoneNumber } from "libphonenumber-js";

export default function ContactUs() {
  const [formState, setFormState] = useState("default");

  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    phoneOrEmail: "",
  });

  const validateEmail = () => validator.isEmail(formData.phoneOrEmail);

  const validatePhone = () => {
    const phoneNumber = formData.phoneOrEmail;
    try {
      const parsedNumber = parsePhoneNumber(phoneNumber, "PL");
      return parsedNumber && isValidNumber(parsedNumber.number, "PL");
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollToAlert = () => {
    setTimeout(() => {
      const section = document.querySelector(".alertMessage");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phoneOrEmail) {
      setErrors({ ...errors, phoneOrEmail: "Podaj numer telefonu lub adres email." });
      return;
    }

    if (validateEmail() || validatePhone()) {
      setErrors({ ...errors, phoneOrEmail: "" });
    } else {
      setErrors({ ...errors, phoneOrEmail: "Wprowadź poprawny numer telefonu lub adres email." });
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        ...formData,
        "form-name": "contact",
      }).toString(),
    })
      .then((result) => {
        scrollToAlert();
        if (result.status !== 200) {
          setFormState("error");
        } else {
          setFormState("success");
        }
      })
      .catch(() => {
        setFormState("error");
        scrollToAlert();
      });
  };

  return (
    <section id="ContactUs">
      <div id="contact-us">
        {formState === "success" && (
          <div className="alertMessage success">
            <h3>Wiadomość wysłana!</h3>
            <p>Dziękujemy za kontakt! Odezwiemy się najszybciej, jak to możliwe.</p>
          </div>
        )}
        {formState === "error" && (
          <div className="alertMessage error">
            <h3>Błąd wysyłania wiadomości</h3>
            <p>
              Wystąpił problem z wysłaniem wiadomości. Skontaktuj się z nami pod adresem
              <a href="mailto:smart@hyte.pl"> smart@hyte.pl</a> lub telefonicznie pod numerem
              <a href="tel:+48729086677"> 729 086 677</a>.
            </p>
          </div>
        )}
        {formState === "default" && (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Informacje kontaktowe</h2>

            <label>
              Imię i nazwisko
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Imię i nazwisko"
              />
            </label>

            <label>
              Numer telefonu lub email *
              <input
                type="text"
                name="phoneOrEmail"
                value={formData.phoneOrEmail}
                onChange={handleChange}
                placeholder="Numer telefonu lub email"
                required
              />
              {errors.phoneOrEmail && <span className="error">{errors.phoneOrEmail}</span>}
            </label>

            <label>
              Wiadomość
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Wiadomość..."
              ></textarea>
            </label>

            <button type="submit" className="btn">
              Wyślij
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
