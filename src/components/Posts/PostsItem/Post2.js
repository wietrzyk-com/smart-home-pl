import "./PostsItem.scss";
import postsImg2 from "../posts2.png";
import img1 from "./Post2img/img1.webp";
import img2 from "./Post2img/img2.webp";
import img3 from "./Post2img/img3.webp";
import img4 from "./Post2img/img4.webp";
import img5 from "./Post2img/img5.webp";
import img6 from "./Post2img/img6.webp";
import img7 from "./Post2img/img7.webp";
import img8 from "./Post2img/img8.webp";
import img9 from "./Post2img/img9.png";
import img10 from "./Post2img/img10.webp";
import img11 from "./Post2img/img11.webp";
import img12 from "./Post2img/img12.webp";
import img13 from "./Post2img/img13.png";
import img14 from "./Post2img/img14.webp";
import img15 from "./Post2img/img15.webp";
import img16 from "./Post2img/img16.webp";
import img17 from "./Post2img/img17.webp";
import img18 from "./Post2img/img18.webp";

export default function Post2() {
  return (
    <section id="Post2">
      <h2>Ogrzewanie w inteligentnym mieszkaniu — to nie jest takie trudne!</h2>
      <p>
        Nie musisz być elektrykiem aby zautomatyzować ogrzewanie w swoim
        mieszkaniu, domu czy biurze.
      </p>
      <p>
        W tym artykule chcę podzielić się wynikami swojego ponad 10-letniego
        doświadczenia z różnymi technologiami i rozwiązaniami.
      </p>

      <h3>Dla kogo jest ten poradnik?</h3>
      <p>
        Dla każdego entuzjasty nowych technologii z lekkim zacięciem
        technicznym.
      </p>
      <p>
        Dla ludzi, którzy są zmęczeni chaosem i bylejakością na rynku IoT
        (Internetu Rzeczy), gdzie do każdej “inteligentnej” zabawki potrzeba
        jest chmura, aplikacja, loginy, hasła.
      </p>
      <p>
        Dla ludzi, którzy wiedzą jak bezpiecznie wymienić włącznik od światła
        albo są gotowi tego się nauczyć.
      </p>
      <p>
        Wreszcie jest to poradnik dla osoby, która chce zmodernizować istniejącą
        już instalacje elektryczną w domu, bez wyrywania kabli ze ścian i
        kładzenia ich od nowa. Przedstawione tutaj rozwiązania w bardzo
        ograniczonym zakresie nadają się do nowych instalacji, bo w nowej
        instalacji można to zrobić od razu lepiej i taniej — niestety.
      </p>

      <h3>Dlaczego Loxone?</h3>
      <p>
        Jeśli jeszcze tego nie wiesz: Loxone to austriacka marka produkująca (w
        Europie) rozwiązania do inteligentnych domów od ponad 14 lat.
      </p>
      <p>
        Uzasadnienie mojego wyboru mogłoby zająć cały obszerny tekst. Spróbuj mi
        zaufać — przetestowałem prawie wszystko co było dostępne na rynku od
        tanich chińskich rozwiązań, propozycji od znanych szwedzkich marek,
        poprzez te bardziej rozpoznawalne i nawet te nazywające się kompletnymi
        systemami dostarczanymi przez znanych producentów.
      </p>
      <p>
        Jestem programistą i entuzjastą DIY (zrób-to-sam) i ruchu open-source,
        który nauczył się sam programowania w bardzo wielu językach
        programowania (full-stack), budowy mebli, naprawy motocykli, budowy
        foodtracków, spawania tigiem, budowy domów i wielu innych.
      </p>
      <p>W wielkim skrócie wybrałem Loxone, ponieważ:</p>
      <ul>
        <li>wiedza techniczna jest dostępna publicznie i za darmo,</li>
        <li>
          ma świetne oprogramowanie (Loxone Config), które jest regularnie
          aktualizowane i ma ogromne możliwości,
        </li>
        <li>
          wsparcie jest dostępne bezpłatnie w każdym języku w całej Europie i od
          niedawna także w USA, w razie problemów można pogadać z ludźmi, którzy
          znają doskonale system,
        </li>
        <li>ma jasną politykę cenową i te same ceny dla wszystkich,</li>
        <li>
          ciągle pojawiają się nowe produkty, a wszystkie stare są wspierane i
          aktualizowane do dzisiaj,
        </li>
        <li>
          sprzęt i oprogramowanie działają super stabilnie i nie zawodzą w
          momencie, kiedy są najbardziej potrzebne.
        </li>
      </ul>

      <h3>Co warto zautomatyzować?</h3>
      <p>
        W moim starym mieszkaniu pierwszą rzeczą, którą zautomatyzowałem było
        zarządzanie oświetleniem i ogrzewaniem.
      </p>
      <p>
        Te dwa tematy fajnie się uzupełniają, bo włączniki do światła mogą mieć
        czujniki temperatury, ale oczywiście można to rozdzielić i na tym tylko
        skupię się w poniższym opracowaniu.
      </p>
      <p>
        Jeżeli masz w mieszkaniu grzejniki ścienne to w bardzo łatwy sposób
        możesz znacznie poprawić jakość swojego życia — pomieszczenia zawsze
        będą miały odpowiednią temperaturę według twojego harmonogramu i
        preferencji.
      </p>

      <h4>Pierwszy krok: centrala systemu</h4>
      <p>
        W ekosystemie Loxone odpowiada za to Miniserver, występuje w trzech
        wersjach, na potrzeby modernizacji starej instalacji w domu czy
        mieszkaniu wystarczy najtańsza opcja: Miniserver Go
      </p>
      <img alt="server" src={postsImg2} />
      <p className="description">Miniserver Go od Loxone</p>
      <p>
        Urządzenie to umożliwia bezprzewodową komunikację z urządzeniami Loxone
        Air, pozwala też na połączenie z rozszerzeniami jeżeli będzie potrzeba
        rozbudowania instalacji w przyszłości, pozwala też na integracje z
        urządzeniami komunikującymi się w sieci lokalnej.
      </p>

      <h4>Sterowanie grzejnikami ściennymi (kaloryferami)</h4>
      <p>
        Pierwszym krokiem będzie uruchomienie Miniservera i stworzenie nowego
        projektu.
      </p>

      <h4>Uruchomienie Miniservera</h4>
      <p>
        Pobierz bezpłatny program{" "}
        <a
          href="https://www.loxone.com/plpl/produkty/loxone-config/"
          rel="noreferrer noopener ugc nofollow"
          target="_blank"
        >
          Loxone Config
        </a>{" "}
        i stwórz nowy projekt, wybierz Miniserver Go jako urządzenie centralne,
        potem uzupełnij podstawowe dane projektu:
      </p>
      <img alt="Interfejs Loxone Config" src={img1} />
      <p className="description">Interfejs Loxone Config</p>
      <p>
        Później na liście Peryferia zaznacz Miniserver i nadaj mu jakąś nazwę
      </p>
      <img alt="Interfejs Loxone Config Peryferia" src={img2} />
      <p className="description">
        W pole adres wewnętrzny możesz wpisać “miniserver”
      </p>
      <p>
        Teraz czas połączyć się z nowo zakupionym Miniserverem Go, podłącz go do
        zasilania i do sieci lokalnej (do wolnego portu routera od internetu).
      </p>
      <img alt="przycisk połącz" src={img3} />
      <p className="marginTop">
        Kliknij <strong>Połącz</strong> <strong>&gt; Szukaj</strong> i poczekaj
        aż Miniserver pojawi się na liście.
      </p>
      <img alt="lista połączeń w Loxone Config" src={img4} />
      <p className="marginTop">
        Domyślna nazwa użytkownika i hasło to <em>admin</em>
      </p>
      <p>
        W tym momencie aplikacja zapyta Cię czy ustawić mocniejsze hasło do
        systemu (polecam to zrobić).
      </p>
      <p>
        <strong>
          Na pytanie czy pobrać program z miniservera i zastąpić istniejący
          projekt odpowiedz: NIE.
        </strong>
      </p>
      <p>
        Jeżeli połączenie się udało możesz zapisać swój nowy projekt w
        urządzeniu, klikając <strong>Zapisz w Miniserverze</strong>.
      </p>
      <img alt="przycisk zapisz w Miniserverze" src={img5} />
      <p>
        To jest dobry moment na uzupełnienie uporządkowanie listy pomieszczeń:
        na liście peryferiów znajdź pomieszczenia i na pasku na górze kliknij{" "}
        <strong>Edycja pomieszczeń</strong>.
      </p>
      <img alt="przycisk Edycja pomieszczeń" src={img6} />
      <p>
        Pousuwaj niepotrzebne pomieszczenia z listy, dodaj te brakujące. Zostaw
        pomieszczenie Centralne (przyda się później). Przynajmniej w
        pomieszczeniach pobytowych (takich jak salon, kuchnia, łazienka) i
        sypialnianych wpisz powierzchnię.
      </p>
      <blockquote>
        <p>
          Nie zapomnij <strong>zapisać</strong> zmienionego programu w
          urządzeniu!
        </p>
      </blockquote>
      <p>
        W tym momencie masz już urządzenie działające w sieci. Możesz się z nim
        połączyć lokalnie przez przeglądarkę internetową lub przez aplikację na
        tablet lub telefon: poszukaj Loxone w sklepie Google Play lub Apple
        AppStore.
      </p>
      <p>
        Aby połączyć się lokalnie przez przeglądarkę kliknij{" "}
        <strong>
          Testy &gt; Interfejs Web &gt; Połącz przez adres lokalny
        </strong>
        :
      </p>
      <img alt="przycisk Połącz przez adres lokalny" src={img7} />
      <p className="marginTop">
        Po zalogowaniu się na użytkownika admin (z Twoim nowo zmienionym hasłem)
        zobaczysz aplikację Loxone (będzie wyglądać trochę inaczej):
      </p>
      <img alt="wygląd aplikacji Loxone" src={img8} />
      <p className="marginTop">
        W tym momencie Miniserver jest gotowy do połączania dodatkowych
        urządzeń.
      </p>
      <blockquote>
        <p>
          Jeżeli potrzebujesz pomocy, chcesz kupić urządzenia Loxone, albo
          chcesz uruchomić bezpłatny dostęp zdalny do swojego Miniservera —{" "}
          <a href="#contact-us">skontaktuj się ze mną</a>.
        </p>
      </blockquote>

      <h4>Sterowanie grzejnikami CO (kaloryferami)</h4>
      <p>
        Urządzenie, które pozwala w prosty sposób sterować przepływem w
        grzejniku ściennym jest bezprzewodowy Siłownik Loxone Air.
      </p>
      <img alt="Siłownik Loxone Air" className="smallImg" src={img9} />
      <p className="marginTop">
        Instalacja jest banalnie prosta, wystarczy włożyć baterie (są w
        zestawie) i wkręcić urządzenie w miejsce starego zaworu.
      </p>
      <blockquote>
        <p>
          Zamiast używania baterii można też podłączyć do lokalnego zasilacza
          stałonapięciowego, siłownik można zasilać napięciem od 5 do 30V (DC)
        </p>
      </blockquote>
      <p>
        Po podłączeniu zasilania urządzenie powinno zacząć mrugać na przemian na
        czerwono/zielono/pomarańczowo— to oznacza, że jest w trybie parowania.
        Jeżeli zechcesz ponownie sparować urządzenie możesz ręcznie aktywować
        tryb parowania naciskając przycisk na 5 sekund zaraz po włożeniu baterii
        / podłączeniu zasilania.
      </p>
      <p>
        W tym momencie możesz otworzyć Loxone Config, połączyć się ze swoim
        miniserverem, na liście peryferiów zaznaczyć Air i z paska narzędzi na
        górze kliknąć <strong>Wyszukiwanie Air</strong>
      </p>
      <p>
        W oknie po lewej stronie zaznacz urządzenie, ustaw pomieszczenie w
        którym się znajduje i kliknij przycisk [+] — spowoduje to dodanie nowego
        urządzenia do Twojego programu. Aby dokończyć proces zamknij okno
        wyszukiwania i ponownie zapisz program w urządzeniu.
      </p>
      <p>
        W tym momencie na liście peryferiów powinno być widoczne nowe
        urządzenie:
      </p>
      <img alt="nowe urządzenie na liście peryferiów" src={img10} />
      <p className="marginTop">
        Teraz czas na właściwy program. Dobrą praktyką jest tworzenie stron
        odpowiadającym pomieszczeniom (<strong>Mój projekt</strong> &gt;{" "}
        <strong>Nowa strona</strong>):
      </p>
      <img alt="tworzenie nowej strony" src={img11} />
      <p className="marginTop">
        Nazwij stronę odpowiednio, przypisz również domyślne pomieszczenie.
        Dzięki temu nowo wstawione bloki będą od razu dobrze przypisane.
      </p>
      <p>
        Teraz na czystej stronie wstaw blok{" "}
        <strong>Inteligentny regulator pomieszczeniowy</strong> i{" "}
        <strong>Sterownik klimatu</strong>.
      </p>
      <img
        alt="wygląd bloku Inteligentny regulator pomieszczeniowy i bloku Sterownik klimatu na czystej strone"
        src={img12}
      />
      <p className="marginTop">
        Do sterownika klimatu od razu przypisz wstawiony regulator:
      </p>
      <img alt="wybór regulatora" src={img13} />
      <p className="marginTop">
        Przypisz pomiar temperatury z Siłownika Air w pomieszczeniu do wejścia{" "}
        <strong>ϑc</strong> bloku regulatora, a wejście <strong>VA</strong>{" "}
        siłownika do wyjścia <strong>H1</strong> tak samo jak na ilustracji.
      </p>
      <p>
        Podwójne kliknięcie na{" "}
        <strong>Inteligentny regulator pomieszczeniowy</strong> otworzy okno
        konfiguracyjne, w którym trzeba zaznaczyć tylko{" "}
        <strong>Ogrzewanie</strong>:
      </p>
      <img alt="okno konfiguracyjne z zaznaczonym ogrzewaniem" src={img14} />
      <blockquote>
        <p className="marginTop">
          Po zapisaniu programu siłownik wykona jazdę kalibracyjną (możesz ją
          też wywołać klikając na siłownik prawym przyciskiem i wybierając opcję{" "}
          <strong>Rekalibruj urządzenie</strong>)
        </p>
      </blockquote>
      <p>
        W tym momencie w aplikacji (na telefonie / tablecie, albo w
        przeglądarce) możesz już zobaczyć sterownik klimatu w pomieszczeniu,
        gdzie ustawisz temperatury i harmonogram grzania.
      </p>
      <div className="imgGrid">
        <img alt="wygląd aplikacji" src={img15} />
        <img alt="wygląd aplikacji" src={img16} />
        <img alt="wygląd aplikacji" src={img17} />
        <img alt="wygląd aplikacji" src={img18} />
      </div>
    </section>
  );
}
