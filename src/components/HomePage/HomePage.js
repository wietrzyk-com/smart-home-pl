import menuImg from "./menu.png";
import "./HomePage.scss";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isLinkVisible, setLinkVisible] = useState(true);
  const [isListVisible, setListVisible] = useState(false);
  const handleMenuClick = (e) => {
    e.preventDefault();
    setLinkVisible(false);
    setListVisible(true);
  };

  const handleItemClick = () => {
    setLinkVisible(true);
    setListVisible(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="HomePage">
      <div>
        <h1>
          <a href="/">smart</a>
        </h1>
        {isLinkVisible && (
          <a href="ff" onClick={handleMenuClick}>
            <img alt="menu button" src={menuImg} />
          </a>
        )}
        {isListVisible && (
          <ul>
            <li>
              <a href="#about-us" onClick={handleItemClick}>
                Dlaczego my?
              </a>
            </li>
            <li>
              <a href="#our-services" onClick={handleItemClick}>
                Usługi
              </a>
            </li>
            <li>
              <a href="#our-products" onClick={handleItemClick}>
                Produkty
              </a>
            </li>
            <li>
              <a href="#contact-us" onClick={handleItemClick}>
                Kontakt
              </a>
            </li>
          </ul>
        )}
      </div>
      <div>
        <h2>Inteligentne domy</h2>
        <p>Wygoda i realne oszczędności dla Twojego domu, biura, firmy.</p>
        <p className="center">
          <a className="btn" href="#contact-us">
            Skontaktuj się
          </a>
        </p>
      </div>
      <div>
        <dl>
          <dd>20+</dd>
          <dt>zrealizowanych projektow</dt>
        </dl>
        <dl>
          <dd>
            <small>do</small> 38%
          </dd>
          <dt>mnejsze rachunki</dt>
        </dl>
      </div>
    </section>
  );
}
