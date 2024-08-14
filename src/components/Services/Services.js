import "./Services.scss";
import servicesImg1 from "./services1.jpg";
import servicesImg2 from "./services2.jpg";

export default function Services() {
  return (
    <section id="Services">
      <div id="our-services">
        <h2>Co mozna zautomatyzować?</h2>
        <h3></h3>
        <ul className="custom-list">
          <li>
            <h4>Oświetlenie</h4>
            <p>
              Oświetlenie zapala się przy wejściu do pomieszczenia i gaśnie gdy pomieszczenie opuszczasz. Czujnik obecności wykrywa ruch, dźwięk i światło. W nocy, kiedy poruszasz się po domu oświetlenie nocne pokazuje Ci drogę przy pomocy przyjemnego, przeyciemnonego światła.
            </p>
            <p>
              Jasność oświetlenia moze być automatycznie dostosowana do pory dnia. Jezeli zdecydujesz się na oświetlenie RGBW od Loxone to w zaleznosci od pory dnia swiatlo bedzie mialo tez odpowiednią temperaturę bieli.
            </p>
            <p>
              Gdy nie ma Cię w domu system symuluję obecność w wybranych pomieszczeniach włączając losowe sceny świetlne i włączając muzykę.
            </p>
            <img alt="q" src={servicesImg1} />
          </li>
          <li>
            <h4>Ogrzewanie</h4>
            <p>
              Moesz mieć indywidualną temperaturę w kadym pomieszczeniu, jedną na dzień,
               inną na noc. Kiedy pracujesz dłuzej system automatycznie przedluzy czas ogrzewania. System nauczy się bezwładności cieplnej Twojego budynku i upewni się, ze temperatura komforotwa bedzie przygotowana we wlasciwym czasie.
            </p>
            <p>
              System ograniczy marnotrawienie energii na ogrzewanie w przypadku, kiedy okna w pomieszczeniu są odtwarte przez dłuszy czas.
            </p>
            <p>
              Kiedy nie ma Cię w pomieszczeniu automatycznie zamknie lub otworzy rolete aby wykorzystac swiatlo sloneczne do ogrzewania.
            </p>
            <p>
              Kiedy wyjedziesz na dluzej system zadba o to aby zabezpieczyc Twój dom i oszczędzać energię. Wystarczy jedno kliknięcie i dom przełączy się w tryb Hibrnacji.
            </p>
            <img alt="q" src={servicesImg2} />
          </li>
          
          <li>
            <h4>Podlewanie</h4>
            <p>
              Nie potrzebujesz skomplikowanego systemu podlewania. W polaczeniu z informacjami o pogodzie
              ze stacji pogodowej lub z internetowego serwisu pogodowego system zdecyduje czy warto podlewać
              ogród.
            </p>
            <p>
              Do uruchomienia podlewania wystarczy zasilanie w wode i skrzynka z elektrozaworami w ogrodzie. Resztą zajmie się system.
            </p>
            <img alt="q" src={servicesImg2} />
          </li>

          <li>
            <h4>Dostęp</h4>
            <p>
              Otwieraj furtki, bramy i drzwi za pomocą kodu lub breloczka NFC.
              Udostępniaj tymczasowe kody kurierowi lub firmie sprzątającej.
              Otwieraj furtki, bramy, drzwi zdalnie dzięki integracji z wideodomofonem.
            </p>
            <img alt="q" src={servicesImg1} />
          </li>

          
          <li>
            <h4>Multimedia</h4>
            <p>
              Odtwarzaj muzykę ze Spotify lub przez AirPlay w dowolnym
              pomieszczeniu lub w kilku pomieszczeniach na raz. Loxone dostarcza
              systemowe głośniki z możliwością zainstalowania w podwieszanym
              suficie lub na ścianie. System audio można wykorzystać również do
              odtwarzania komunikatów, dzwonka do drzwi i alarmów.
            </p>
            <img alt="q" src={servicesImg2} />
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
            <img alt="q" src={servicesImg1} />
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
            <img alt="q" src={servicesImg2} />
          </li>
        </ul>
      </div>
    </section>
  );
}
