import "./FAQ.scss";
import { useState } from "react";

// eslint-disable-next-line
const questions = [
  {
    title: 'Ile to kosztuje?',
    body: <>
      <p>
        Koszt automatyzacji zależy od zakresu prac i wybranych funkcji.
        Na przykład automatyzacja ogrzewania w małym budynku to wydatek rzędu kilku tysięcy złotych, przy czym oszczędności będą widoczne już na pierwszym rachunku, a komfort użytkowania znacząco się poprawi.
      </p>
      <p>
        Typowa inwestycja w pełne rozwiązanie dla domu jednorodzinnego wynosi około 35 tys. zł.
        Wersje premium, obejmujące oświetlenie Loxone i dodatkowe udogodnienia, to koszt maksymalnie 150 tys. zł. To inwestycja, która zwraca się szybciej niż instalacja fotowoltaiki!
      </p>
    </>
  },
  {
    title: "Czy instalację może wykonać mój elektryk?",
    body: (
      <p>
        Tak, współpracujemy z lokalnymi elektrykami, zapewniając im pełne wsparcie techniczne i szkolenia.
        Dzięki temu Twój elektryk może bez problemu zainstalować nasze systemy zgodnie z najwyższymi standardami.
      </p>
    ),
  },
  {
    title: "Co w pierwszej kolejności automatyzować?",
    body: (
      <p>
        Najlepiej zacząć od systemów przynoszących największe oszczędności i poprawę komfortu, takich jak ogrzewanie, oświetlenie czy sterowanie roletami.
        Wybór odpowiednich funkcji zależy od Twoich priorytetów i stylu życia – doradzimy Ci w tym procesie!
      </p>
    ),
  },
  {
    title: "Mam developera - czy mogę mieć inteligentny dom?",
    body: (
      <p>
        Oczywiście! Współpracujemy z deweloperami na różnych etapach budowy, oferując zarówno doradztwo, jak i kompleksowe wdrożenie.
        Możesz mieć pewność, że Twój dom będzie w pełni inteligentny i dostosowany do Twoich potrzeb.
      </p>
    ),
  },
  {
    title: "Chcę zbudować inteligentny dom sam, czy mogę liczyć na pomoc?",
    body: (
      <p>
        Zdecydowanie tak! Oferujemy wsparcie na każdym etapie – od wyboru sprzętu, przez projekt, aż po konfigurację.
        Jeśli zdecydujesz się na samodzielne działania, zapewnimy Ci niezbędne materiały i wskazówki, aby cały proces był łatwy i przyjemny.
      </p>
    ),
  },
];


export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(-1);

  return (
    <section id="FAQ">
      <div>
        <h2>Pytania & odpowiedzi</h2>
        <h3>Często zadavane pytania</h3>
        <ul className="custom-list">
          {questions.map((question, index) => (
            <li key={index} className={faqOpen === index ? "open" : "closed"}>
              <h4>{question.title}</h4>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setFaqOpen(faqOpen === index ? -1 : index);
                }}
                href={`#FAQ${index}`}
              >
                +
              </a>
              {question.body}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Masz inne pytania?</p>
        <p>
          <a className="btn" href="#contact-us">
            Skontaktuj się z nami
          </a>
        </p>
      </div>
    </section>
  );
}
