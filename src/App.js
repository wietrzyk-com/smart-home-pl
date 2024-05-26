import menuImg from "./menu.png";

function App() {
  return (
    <>
      <section id="HomePage">
        <div>
          <h1>
            <a href="/">smart</a>
          </h1>
          <a href="ff">
            <img alt="menu" src={menuImg} />
          </a>
        </div>
        <div>
          <h2>Welcome to a Smarter Home Experience.</h2>
          <p>
            Purus pellentesque sed enim pharetra. Et elit egestas vitae in ut
            vitae. Cras pulvinar massa ut amet egestas in proin. In hendrerit
            amet nullam auctor lacinia nisi.
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

      <section id="WhyChooseUs">
        <div>
          <h2>Dlaczego my?</h2>
          <h3>Zalety systemu Loxone</h3>
          <p>
            <a className="btn" href="#Services">
              Learn more
            </a>
          </p>
          <ol className="custom-list">
            <li>
              <h4>Komfort i wygoda</h4>
              <p>
                Loxone automatyzuje wszystkie aspekty Twojego domu, od
                oświetlenia po kontrolę klimatu i bezpieczeństwo, zapewniając
                komfortowe i intuicyjne zarządzanie z dowolnego miejsca za
                pomocą wygodnej aplikacji.
              </p>
            </li>
            <li>
              <h4>Efektywność energetyczna i oszczędność</h4>
              <p>
                Inteligentne rozwiązania Loxone pomagają zmniejszyć zużycie
                energii, optymalizując pracę systemów grzewczych,
                oświetleniowych i innych urządzeń, co prowadzi do znacznych
                oszczędności na rachunkach za energię.
              </p>
            </li>
            <li>
              <h4>Bezpieczeństwo i niezawodność</h4>
              <p>
                System Loxone zapewnia wysoki poziom bezpieczeństwa dzięki
                integracji monitoringu wideo, alarmów i innych środków ochrony,
                chroniąc Twój dom i majątek przez całą dobę.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="Services">
        <div></div>
      </section>

      <section id="Testimonials">
        <div></div>
      </section>

      <section id="FAQ">
        <div></div>
      </section>

      <footer></footer>
    </>
  );
}

export default App;
