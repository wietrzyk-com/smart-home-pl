import menuImg from "./menu.png";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section id="HomePage">
      <div>
        <h1>
          <a href="/">smart</a>
        </h1>
        <a href="ff">
          <img alt="menu" src={menuImg} />
        </a>
      </div>
      <div>
        <h2>Welcome to a Smarter Home Experience.</h2>
        <p>
          Purus pellentesque sed enim pharetra. Et elit egestas vitae in ut
          vitae. Cras pulvinar massa ut amet egestas in proin. In hendrerit amet
          nullam auctor lacinia nisi.
        </p>
        <p className="center">
          <a className="btn" href="#q">
            Contact us
          </a>
        </p>
      </div>
      <div>
        <dl>
          <dd>50+</dd>
          <dt>zrealizowanych projektow</dt>
        </dl>
        <dl>
          <dd>10+</dd>
          <dt>czegos innego</dt>
        </dl>
      </div>
    </section>
  );
}
