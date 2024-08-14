import "./FAQ.scss";
import { useState } from "react";

// eslint-disable-next-line
const questions = [
  {
    title: 'Ile to kosztuje?',
    body: <>
      <p>
        Automatyzacja ogrzewania w małym budynku to koszt kilku tysiecy złotych, jednak oszczędności będą widoczne już na pierwszym rachunku za ogrzewanie, a komfort znacznie się poprawi.
      </p>
      <p>
        Im więcej systemów integrujemy tym większe koszty w sprzęcie Loxone, ale też większe oszczędności. Typowa inwestycja w dom jednorodzinny to koszt w granicach 35 tys. zł, wersja luksusowa z oświetleniem od Loxone i absolutnie wszyskimi udogodnieniami zwykle zamyka się w 150 tys. zł.
      </p>
    </>
  },
  {
    title: "Czy instalację moze wykonać mój elektryk?",
    body: (
      <p>
        Convallis massa hac proin rutrum nisl habitasse. Tortor arcu eleifend
        nec massa dictum purus. Erat varius vulputate orci lacus gravida
        molestie habitant. Amet etiam dignissim.
      </p>
    ),
  },
  {
    title: "Co w pierwszej kolejności automatyzować?",
    body: (
      <p>
        Convallis massa hac proin rutrum nisl habitasse. Tortor arcu eleifend
        nec massa dictum purus. Erat varius vulputate orci lacus gravida
        molestie habitant. Amet etiam dignissim.
      </p>
    ),
  },
  {
    title: "Mam developera - czy mogę mieć inteligentny dom?",
    body: (
      <p>
        Convallis massa hac proin rutrum nisl habitasse. Tortor arcu eleifend
        nec massa dictum purus. Erat varius vulputate orci lacus gravida
        molestie habitant. Amet etiam dignissim.
      </p>
    ),
  },
  {
    title: "Chcę zbudować inteligentny dom sam, czy mogę liczyć na pomoc?",
    body: (
      <p>
        Convallis massa hac proin rutrum nisl habitasse. Tortor arcu eleifend
        nec massa dictum purus. Erat varius vulputate orci lacus gravida
        molestie habitant. Amet etiam dignissim.
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
        <p>Masz inne pytannia?</p>
        <p>
          <a className="btn" href="#contact-us">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
