import menuImg from "./menu.png";
import "./HomePage.scss";
import { useState } from "react";

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
                About Us
              </a>
            </li>
            <li>
              <a href="#our-services" onClick={handleItemClick}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#our-products" onClick={handleItemClick}>
                Our Products
              </a>
            </li>
            <li>
              <a href="#contact-us" onClick={handleItemClick}>
                Contact us
              </a>
            </li>
          </ul>
        )}
      </div>
      <div>
        <h2>Welcome to a Smarter Home Experience.</h2>
        <p>Inteligentny dom, który nie przeszkadza.</p>
        <p className="center">
          <a className="btn" href="#contact-us">
            Contact us
          </a>
        </p>
      </div>
      <div>
        <dl>
          <dd>50+</dd>
          <dt>zrealizowanych projektow</dt>
        </dl>
        <dl>
          <dd>10+</dd>
          <dt>czegos innego</dt>
        </dl>
      </div>
    </section>
  );
}
