import "./Services.scss";
import servicesImg1 from "./ServicesImg/light.jpg";
import servicesImg2 from "./ServicesImg/heating.jpg";
import servicesImg3 from "./ServicesImg/watering.jpg";
import servicesImg4 from "./ServicesImg/access.jpg";
import servicesImg5 from "./ServicesImg/audio.jpg";
import servicesImg6 from "./ServicesImg/energy.jpg";
import servicesImg7 from "./ServicesImg/hotel.jpg";

export default function Services() {
  return (
    <section id="Services">
      <div id="our-services">
        <h2>Co można zautomatyzować?</h2>
        <ul className="custom-list">
          <li>
            <h4>Oświetlenie</h4>
            <p>
              Automatyczne zapalanie i gaszenie światła przy wejściu oraz wyjściu z pomieszczenia. Czujniki obecności wykrywają ruch, dźwięk i światło, dostosowując oświetlenie do Twoich potrzeb.
            </p>
            <p>
              Jasność oraz temperatura barwowa światła RGBW automatycznie dopasowują się do pory dnia, zapewniając optymalny komfort wizualny.
            </p>
            <p>
              Symulacja obecności w domu włącza losowe sceny świetlne oraz muzykę, dbając o bezpieczeństwo, gdy jesteś poza domem.
            </p>
            <img alt="Oświetlenie" src={servicesImg1} />
          </li>
          <li>
            <h4>Ogrzewanie</h4>
            <p>
              Indywidualne ustawienia temperatury w każdym pomieszczeniu, optymalizowane według Twojego harmonogramu.
            </p>
            <p>
              System uczy się charakterystyki cieplnej budynku i redukuje zużycie energii dzięki automatycznemu dostosowaniu ogrzewania do otwartych okien czy nieobecności domowników.
            </p>
            <p>
              Tryb "Hibernacja" zabezpiecza dom podczas dłuższych wyjazdów, zmniejszając zużycie energii jednym kliknięciem.
            </p>
            <img alt="Ogrzewanie" src={servicesImg2} />
          </li>
          <li>
            <h4>Podlewanie</h4>
            <p>
              Inteligentne podlewanie ogrodu na podstawie danych pogodowych ze stacji lokalnych lub serwisów internetowych.
            </p>
            <p>
              Prosta instalacja – wystarczy zasilanie w wodę i skrzynka z elektrozaworami, resztą zajmie się system.
            </p>
            <img alt="Podlewanie" src={servicesImg3} />
          </li>
          <li>
            <h4>Dostęp</h4>
            <p>
              Otwieraj drzwi, furtki i bramy za pomocą kodu, breloczka NFC lub zdalnie przez aplikację, idealne dla gości i kurierów.
            </p>
            <img alt="Dostęp" src={servicesImg4} />
          </li>
          <li>
            <h4>Multimedia</h4>
            <p>
              System audio pozwala odtwarzać muzykę w dowolnym pomieszczeniu, synchronizując ją w całym domu. Dodatkowo pełni funkcję dzwonka do drzwi i alarmu.
            </p>
            <img alt="Multimedia" src={servicesImg5} />
          </li>
          <li>
            <h4>Zarządzanie energią w budynkach komercyjnych</h4>
            <p>
              Tworzenie planów i schematów zapewniających bezpieczne, efektywne dostarczanie energii z uwzględnieniem przyszłych potrzeb.
            </p>
            <p>
              Profesjonalne projektowanie gwarantuje zgodność z normami technicznymi oraz maksymalną niezawodność instalacji.
            </p>
            <img alt="Zarządzanie energią" src={servicesImg6} />
          </li>
          <li>
            <h4>Systemy zarządzania budynkami komercyjnymi</h4>
            <p>
              Zaawansowane platformy BMS umożliwiają centralne zarządzanie oświetleniem, klimatyzacją, ogrzewaniem i bezpieczeństwem, zwiększając efektywność operacyjną budynków.
            </p>
            <p>
              Optymalizacja zużycia energii i redukcja kosztów przy jednoczesnym podniesieniu komfortu użytkowników.
            </p>
            <img alt="BMS" src={servicesImg7} />
          </li>
        </ul>
      </div>
    </section>
  );
}
