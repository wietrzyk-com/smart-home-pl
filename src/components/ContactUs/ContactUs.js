import React, { useState } from "react";
import "./ContactUs.scss";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    phoneOrEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneOrEmail" && !value) {
      setErrors({
        ...errors,
        phoneOrEmail: "Phone number or Email is required",
      });
    } else {
      setErrors({ ...errors, phoneOrEmail: "" });
    }
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

    console.log("Form submitted", formData);
    // Додайте свій код для обробки відправлення форми
  };

  return (
    <section id="ContactUs">
      <div id="contact-us">
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

          <a className="btn" href="#q">
            Submit
          </a>
        </form>
      </div>
    </section>
  );
}
