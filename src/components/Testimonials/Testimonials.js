import testimonialImg1 from "./testimonial1.jpg";
import testimonialImg2 from "./testimonial2.jpg";
import testimonialImg3 from "./testimonial2.jpg";
import testimonialImg4 from "./testimonial2.jpg";
import testimonialImg5 from "./testimonial2.jpg";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section id="Testimonials">
      <div>
        <img alt="Person1" src={testimonialImg1} />
        <div>
          <h4>Jakub</h4>
          <h5>Specjalista ds. automatyki</h5>
        </div>
        <p>
          "Systemy Loxone całkowicie zmieniły sposób, w jaki korzystam z domu. Automatyzacja codziennych zadań i
          optymalizacja zużycia energii to nie tylko wygoda, ale także realne oszczędności. Polecam każdemu, kto
          ceni sobie nowoczesne technologie."
        </p>
      </div>
      <div>
        <img alt="Person2" src={testimonialImg2} />
        <div>
          <h4>Anna</h4>
          <h5>Architekt wnętrz</h5>
        </div>
        <p>
          "Współpraca z zespołem wdrażającym systemy Loxone to czysta przyjemność. Ich profesjonalizm i doświadczenie
          sprawiają, że każdy projekt jest dopracowany w najmniejszym szczególe. Klienci są zachwyceni efektami!"
        </p>
      </div>
      <div>
        <img alt="Person3" src={testimonialImg3} />
        <div>
          <h4>Paweł</h4>
          <h5>Właściciel firmy</h5>
        </div>
        <p>
          "Dzięki systemom Loxone mogę zarządzać moim biurem w sposób prosty i wydajny. Oszczędności na energii oraz
          zwiększone bezpieczeństwo to tylko niektóre z korzyści, które zyskałem. To inwestycja, która naprawdę się opłaca."
        </p>
      </div>
      <div>
        <img alt="Person4" src={testimonialImg4} />
        <div>
          <h4>Magdalena</h4>
          <h5>Projektantka ogrodów</h5>
        </div>
        <p>
          "Automatyczne systemy podlewania od Loxone to doskonałe rozwiązanie dla moich klientów. Dzięki temu ich ogrody
          zawsze wyglądają perfekcyjnie, a ja mogę polecać usługi, które naprawdę działają."
        </p>
      </div>
      <div>
        <img alt="Person5" src={testimonialImg5} />
        <div>
          <h4>Łukasz</h4>
          <h5>Inżynier budowlany</h5>
        </div>
        <p>
          "Integracja systemów Loxone w projektowanych przeze mnie budynkach to strzał w dziesiątkę. Klienci doceniają
          łatwość obsługi i nowoczesne rozwiązania, które podnoszą komfort codziennego życia."
        </p>
      </div>
    </section>
  );
}
