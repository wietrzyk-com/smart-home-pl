import menuImg from "./menu.png";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import logoWhite from "./logoWhite.svg";

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
        <a href="/">
          <img class="logo" alt="logo" src={logoWhite} />
        </a>
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
      <h1>Smart.hyte.pl</h1>
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
