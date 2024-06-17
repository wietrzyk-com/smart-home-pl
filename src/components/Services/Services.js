import "./Services.scss";
import servicesImg1 from "./services1.jpg";
import servicesImg2 from "./services2.jpg";

export default function Services() {
  return (
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
              ekosystemie. Dzięki technologiom IoT, oferują wygodę, oszczędności
              energetyczne i podwyższony poziom bezpieczeństwa. Automatyzują
              codzienne zadania, takie jak sterowanie oświetleniem, ogrzewaniem
              i klimatyzacją. Czujniki i połączenia internetowe umożliwiają
              komunikację urządzeń, analizę danych i reakcję na zmiany w czasie
              rzeczywistym. Inteligentne termostaty dostosowują temperaturę w
              zależności od obecności mieszkańców i pogody, co zwiększa komfort
              i redukuje zużycie energii.
            </p>
            <img alt="" src={servicesImg1} />
          </li>
          <li>
            <h4>Projektowanie instalacji elektrycznych</h4>
            <p>
              Projektowanie instalacji elektrycznych obejmuje tworzenie planów i
              schematów, które zapewniają bezpieczne i efektywne dostarczanie
              energii elektrycznej w budynkach. Proces ten uwzględnia wymagania
              dotyczące obciążenia, zabezpieczeń, zgodność z przepisami oraz
              przyszłe potrzeby użytkowników. Kluczowe etapy to analiza potrzeb,
              dobór odpowiednich komponentów, rozmieszczenie przewodów i
              urządzeń, a także opracowanie schematów elektrycznych.
              Profesjonalne projektowanie zapewnia niezawodność, bezpieczeństwo
              i zgodność z normami technicznymi.
            </p>
            <img alt="" src={servicesImg2} />
          </li>
          <li>
            <h4>Zarzadzanie energia elektryczna w budynkach komercyjnych</h4>
            <p>
              Projektowanie instalacji elektrycznych obejmuje tworzenie planów i
              schematów, które zapewniają bezpieczne i efektywne dostarczanie
              energii elektrycznej w budynkach. Proces ten uwzględnia wymagania
              dotyczące obciążenia, zabezpieczeń, zgodność z przepisami oraz
              przyszłe potrzeby użytkowników. Kluczowe etapy to analiza potrzeb,
              dobór odpowiednich komponentów, rozmieszczenie przewodów i
              urządzeń, a także opracowanie schematów elektrycznych.
              Profesjonalne projektowanie zapewnia niezawodność, bezpieczeństwo
              i zgodność z normami technicznymi.
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
              efektywność operacyjną i komfort użytkowników. Dzięki centralnemu
              zarządzaniu, systemy te szybko reagują na zmieniające się warunki,
              co prowadzi do oszczędności kosztów i zrównoważonego rozwoju
              budynku.
            </p>
            <img alt="" src={servicesImg2} />
          </li>
        </ul>
      </div>
    </section>
  );
}
