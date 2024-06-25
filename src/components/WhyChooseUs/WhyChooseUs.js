import "./WhyChooseUs.scss";

export default function WhyChooseUs() {
  return (
    <section id="WhyChooseUs">
      <div>
        <h2>Dlaczego my?</h2>
        <h3>Zalety systemu Loxone</h3>
        <p className="btnRight">
          <a className="btn" href="#Services">
            Learn more
          </a>
        </p>
        <ol className="custom-list">
          <li>
            <h4>Komfort i wygoda</h4>
            <p>
              Loxone automatyzuje wszystkie aspekty Twojego domu, od oświetlenia
              po kontrolę klimatu i bezpieczeństwo, zapewniając komfortowe i
              intuicyjne zarządzanie z dowolnego miejsca za pomocą wygodnej
              aplikacji.
            </p>
          </li>
          <li>
            <h4>Efektywność energetyczna i oszczędność</h4>
            <p>
              Inteligentne rozwiązania Loxone pomagają zmniejszyć zużycie
              energii, optymalizując pracę systemów grzewczych, oświetleniowych
              i innych urządzeń, co prowadzi do znacznych oszczędności na
              rachunkach za energię.
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
              zainstalować i zintegrować z istniejącymi systemami i urządzeniami
              w Twoim domu, zapewniając szybkie uruchomienie i bezproblemowe
              działanie.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
