import "./Posts.scss";
import postsImg1 from "./posts1.jpg";
import postsImg2 from "./posts2.png";

export default function Posts() {
  return (
    <section id="Posts">
      <div>
        <h2>Baza wiedzy</h2>
        <ul className="custom-list">
          <li>
            <a href="#">
              <img alt="post" src={postsImg1} />
              <h4>Automatyka domowa Loxone dla Projektantów Wnętrz</h4>
              <p>
                Every time I try to load SVG to some new Create React App i
                struggle with loading SVG files, mostly because I forget the
                best solution I…
              </p>
            </a>
          </li>

          <li>
            <a href="#">
              <img alt="post" src={postsImg2} />
              <h4>
                Ogrzewanie w inteligentnym mieszkaniu — to nie jest takie
                trudne!
              </h4>
              <p>
                Nie musisz być elektrykiem aby zautomatyzować ogrzewanie w swoim
                mieszkaniu, domu czy biurze.
              </p>
            </a>
          </li>

          <li>
            <a href="#">
              <img alt="post" src={postsImg2} />
              <h4>
                Ogrzewanie w inteligentnym mieszkaniu — to nie jest takie
                trudne!
              </h4>
              <p>
                Nie musisz być elektrykiem aby zautomatyzować ogrzewanie w swoim
                mieszkaniu, domu czy biurze.
              </p>
            </a>
          </li>

          <li>
            <a href="#">
              <img alt="post" src={postsImg2} />
              <h4>
                Ogrzewanie w inteligentnym mieszkaniu — to nie jest takie
                trudne!
              </h4>
              <p>
                Nie musisz być elektrykiem aby zautomatyzować ogrzewanie w swoim
                mieszkaniu, domu czy biurze.
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="pagination">
        <a href="#prev">&laquo; wstecz</a>
        <a href="#next">dalej &raquo;</a>
      </div>
    </section>
  );
}
