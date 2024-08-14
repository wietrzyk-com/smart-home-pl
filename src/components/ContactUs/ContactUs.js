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

  const validateEmail = () => {
    return validator.isEmail(formData.phoneOrEmail);
  };

  const validatePhone = () => {
    const phoneNumber = formData.phoneOrEmail;
    try {
      const parsedNumber = parsePhoneNumber(phoneNumber, "PL");
      console.log({ phoneNumber, parsedNumber });
      return parsedNumber && isValidNumber(phoneNumber, "PL");
    } catch (e) {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phoneOrEmail) {
      setErrors({
        ...errors,
        phoneOrEmail: "Phone number or Email is required",
      });
      return;
    }

    if (validateEmail() || validatePhone()) {
      setErrors({ ...errors, phoneOrEmail: "" });
    } else {
      setErrors({
        ...errors,
        phoneOrEmail: "Podaj prawidlowy nr telefonu albo email",
      });
      return;
    }

    console.log("Form submitted", formData);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        ...formData,
        "form-name": "contact",
      }).toString(),
    })
      .then((result) => {
        if (result.status !== 200) {
          return setFormState("error");
        }
        setFormState("success");
      })
      .catch((error) => setFormState("error"));
  };

  return (
    <section id="ContactUs">
      <div id="contact-us">
        {formState === "success" && (
          <div class="alertMessage success">
            <h3>Wiadomosc wyslana</h3>
            <p>
              Dziekujemy za wyslanie wiadomosci - odezwiemy sie do Panstwa
              najszybciej jak bedzie to mozliwe!
            </p>
          </div>
        )}
        {formState === "error" && (
          <div class="alertMessage error">
            <h3>Blad wysylania wiadomosci</h3>
            <p>
              Z jakiegos powodu nie udalo sie wyslac wiadomosci. Prosimy o
              kontakt email <a href="mailto:smart@hyte.pl">smart@hyte.pl</a> lub
              telefoniczny na nr <a href="callto:+48729086677">729 086 677</a>
            </p>
          </div>
        )}
        {formState === "default" && (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Information</h2>

            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>

            <label>
              Phone number or Email *
              <input
                type="text"
                name="phoneOrEmail"
                value={formData.phoneOrEmail}
                onChange={handleChange}
                placeholder="Phone number or Email"
                required
              />
              {errors.phoneOrEmail && (
                <span className="error">{errors.phoneOrEmail}</span>
              )}
            </label>

            <label>
              Comments
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
              ></textarea>
            </label>

            <a onClick={handleSubmit} className="btn" href="#q">
              Submit
            </a>
          </form>
        )}
      </div>
    </section>
  );
}
