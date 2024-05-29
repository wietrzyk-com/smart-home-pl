import menuImg from "./menu.png";
import partner from "./silverPartnerLoxone.png";
import servicesImg1 from "./services1.jpg";
import servicesImg2 from "./services2.jpg";

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
            <li>
              <h4>Innowacyjność i elastyczność</h4>
              <p>
                Loxone oferuje zaawansowane technologicznie rozwiązania, które
                łatwo dostosowują się do indywidualnych potrzeb Twojego domu lub
                biznesu, pozwalając na tworzenie unikalnych scenariuszy
                automatyzacji dla maksymalnej efektywności i wygody.
              </p>
            </li>
            <li>
              <h4>Łatwość instalacji i integracji</h4>
              <p>
                System Loxone jest zaprojektowany tak, aby można go było łatwo
                zainstalować i zintegrować z istniejącymi systemami i
                urządzeniami w Twoim domu, zapewniając szybkie uruchomienie i
                bezproblemowe działanie.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="Services">
        <div>
          <h2>Our services</h2>
          <h3>Smart home</h3>
          <ul className="custom-list">
            <li>
              <h4>Inteligentne domy</h4>
              <p>
                Inteligentne domy, znane jako smart home, to nowoczesne
                technologie integrujące różnorodne systemy i urządzenia w jednym
                ekosystemie. Dzięki technologiom IoT, oferują wygodę,
                oszczędności energetyczne i podwyższony poziom bezpieczeństwa.
                Automatyzują codzienne zadania, takie jak sterowanie
                oświetleniem, ogrzewaniem i klimatyzacją. Czujniki i połączenia
                internetowe umożliwiają komunikację urządzeń, analizę danych i
                reakcję na zmiany w czasie rzeczywistym. Inteligentne termostaty
                dostosowują temperaturę w zależności od obecności mieszkańców i
                pogody, co zwiększa komfort i redukuje zużycie energii.
              </p>
              <img alt="" src={servicesImg1} />
            </li>
            <li>
              <h4>Projektowanie instalacji elektrycznych</h4>
              <p>
                Projektowanie instalacji elektrycznych obejmuje tworzenie planów
                i schematów, które zapewniają bezpieczne i efektywne
                dostarczanie energii elektrycznej w budynkach. Proces ten
                uwzględnia wymagania dotyczące obciążenia, zabezpieczeń,
                zgodność z przepisami oraz przyszłe potrzeby użytkowników.
                Kluczowe etapy to analiza potrzeb, dobór odpowiednich
                komponentów, rozmieszczenie przewodów i urządzeń, a także
                opracowanie schematów elektrycznych. Profesjonalne projektowanie
                zapewnia niezawodność, bezpieczeństwo i zgodność z normami
                technicznymi.
              </p>
              <img alt="" src={servicesImg2} />
            </li>
            <li>
              <h4>Zarzadzanie energia elektryczna w budynkach komercyjnych</h4>
              <p>
                Projektowanie instalacji elektrycznych obejmuje tworzenie planów
                i schematów, które zapewniają bezpieczne i efektywne
                dostarczanie energii elektrycznej w budynkach. Proces ten
                uwzględnia wymagania dotyczące obciążenia, zabezpieczeń,
                zgodność z przepisami oraz przyszłe potrzeby użytkowników.
                Kluczowe etapy to analiza potrzeb, dobór odpowiednich
                komponentów, rozmieszczenie przewodów i urządzeń, a także
                opracowanie schematów elektrycznych. Profesjonalne projektowanie
                zapewnia niezawodność, bezpieczeństwo i zgodność z normami
                technicznymi.
              </p>
              <img aly="" src={servicesImg1} />
            </li>
            <li>
              <h4>Systemy zarzadzania budynkami komercyjnymi</h4>
              <p>
                Systemy zarządzania budynkami komercyjnymi (BMS) to zaawansowane
                platformy, które integrują i automatyzują kontrolę różnych
                systemów budynkowych, takich jak oświetlenie, klimatyzacja,
                ogrzewanie, wentylacja i bezpieczeństwo. BMS umożliwiają
                monitorowanie i optymalizację zużycia energii, poprawiając
                efektywność operacyjną i komfort użytkowników. Dzięki
                centralnemu zarządzaniu, systemy te szybko reagują na
                zmieniające się warunki, co prowadzi do oszczędności kosztów i
                zrównoważonego rozwoju budynku.
              </p>
              <img alt="" src={servicesImg2} />
            </li>
          </ul>
        </div>
      </section>

      <section id="Testimonials">
        <div>
          <ul>
            <li>
              <h4>Ime Nazwisko</h4>
              <img alt="" href="" />
              //stars
              <p>Ocena</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="FAQ">
        <div>
          <h2>Pytania & odpowiedzi</h2>
          <h3>Często Zadavane Pytania</h3>
          <ul>
            <li>
              <h4></h4>
              <p></p>
            </li>
            <li>
              <h4></h4>
              <p></p>
            </li>
            <li>
              <h4></h4>
              <p></p>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <div>
          <h1>
            <a href="/">smart</a>
          </h1>
        </div>

        <div>
          <a href="//">
            <img alt="menu" src={menuImg} />
          </a>
          <p>Jakub Wietrzyk</p>
          <p>
            Grodzka 14/2
            <br />
            58-100 Świdnica
          </p>
          <p>NIP PL8852560942</p>
          <p>+48 729 086 677</p>
          <p>
            Obszar działania:
            <br />
            Wrocław, Strzegom, Świdnica, <br />
            Wałbrzych, Oława
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
