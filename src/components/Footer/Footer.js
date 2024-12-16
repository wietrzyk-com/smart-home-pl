import "./Footer.scss";
import partner from "./silverPartnerLoxone.png";
import logoWhite from "./logoWhite.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="/">
          <img alt="logo" src={logoWhite} />
        </a>
      </div>

      <div>
        <ul>
          <li>
            <a href="#about-us">O firmie</a>
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
        <h2>Dane firmy</h2>
        <p>Jakub Wietrzyk<br />
        Nowe Miasto Folwark 69m<br />
        09-120 Nowe Miasto<br />
        NIP: PL8852560942</p>
        <p>
          Telefon:{" "}
          <a href="tel:+48729086677" className="contact-link">
            +48 729 086 677
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:smart@hyte.pl" className="contact-link">
            smart@hyte.pl
          </a>
        </p>
        <p>
          Obszar działania:
          <br />
          Wrocław, Strzegom, Świdnica, <br />
          Wałbrzych, Oława
        </p>
        <div className="partner-section">
          <img alt="silver partner" src={partner} />
          <p>Jesteśmy srebrnym partnerem Loxone – wiodącego producenta systemów automatyki budynkowej.</p>
        </div>
      </div>
    </footer>
  );
}
