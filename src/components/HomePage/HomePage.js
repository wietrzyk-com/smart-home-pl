import menuImg from "./menu.png";
import "./HomePage.scss";
import { useState } from "react";

export default function HomePage() {
  const [isLinkVisible, setLinkVisible] = useState(true);
  const [isListVisible, setListVisible] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setLinkVisible(false);
    setListVisible(true);
  };

  return (
    <section id="HomePage">
      <div>
        <h1>
          <a href="/">smart</a>
        </h1>
        {isLinkVisible && (
          <a href="ff" onClick={handleClick}>
            <img alt="menu button" src={menuImg} />
          </a>
        )}
        {isListVisible && (
          <ul>
            <li>
              <a href="#about-us">Dlaczego my?</a>
            </li>
            <li>
              <a href="#our-services">Usługi</a>
            </li>
            <li>
              <a href="#our-products">Produkty</a>
            </li>
            <li>
              <a href="#contact-us">Kontakt</a>
            </li>
          </ul>
        )}
      </div>
      <div>
        <h2>Inteligentne domy</h2>
        <p>
           Wygoda i realne oszczędności dla Twojego domu, biura, firmy.
        </p>
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
          <dd><small>do</small> 38%</dd>
          <dt>mnejsze rachunki</dt>
        </dl>
      </div>
    </section>
  );
}
