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
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Services</a>
            </li>
            <li>
              <a href="">Our Products</a>
            </li>
            <li>
              <a href="#q">Contact us</a>
            </li>
          </ul>
        )}
      </div>
      <div>
        <h2>Welcome to a Smarter Home Experience.</h2>
        <p>
          Purus pellentesque sed enim pharetra. Et elit egestas vitae in ut
          vitae. Cras pulvinar massa ut amet egestas in proin. In hendrerit amet
          nullam auctor lacinia nisi.
        </p>
        <p className="center">
          <a className="btn" href="#q">
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
