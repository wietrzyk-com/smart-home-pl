import "./Posts.scss";
import postsImg1 from "./posts1.jpg";
import postsImg2 from "./posts2.png";

export default function Posts() {
  return (
    <section id="Posts">
      <div id="posts">
        <h2>Baza wiedzy</h2>
        <ul className="custom-list">
          <li>
            <a href="/p/automatyka-domowa-loxone-dla-projektantow-wnetrz">
              <img alt="post" src={postsImg1} />
              <h4>Automatyka domowa Loxone dla Projektantów Wnętrz</h4>
              <p>
                Dowiedz się, jak współpraca z projektantem wnętrz i zastosowanie nowoczesnych systemów automatyki może
                poprawić efektywność pracy oraz komfort użytkowników.
              </p>
            </a>
          </li>

          <li>
            <a href="/p/ogrzewanie-w-inteligentnym-mieszkaniu">
              <img alt="post" src={postsImg2} />
              <h4>Ogrzewanie w inteligentnym mieszkaniu — to nie jest takie trudne!</h4>
              <p>
                Poznaj proste sposoby na zautomatyzowanie ogrzewania w swoim domu lub biurze, które przynoszą wygodę
                i oszczędności.
              </p>
            </a>
          </li>

          
        </ul>
      </div>
      {/* <div className="pagination">
        <a href="#prev">&laquo; wstecz</a>
        <a href="#next">dalej &raquo;</a>
      </div> */}
    </section>
  );
}
