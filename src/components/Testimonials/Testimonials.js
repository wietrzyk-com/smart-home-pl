import testimonialImg1 from "./testimonial1.jpg";
import testimonialImg2 from "./testimonial2.jpg";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section id="Testimonials">
      <div>
        <img alt="Person1" src={testimonialImg1} />
        <div>
          <h4>Jakub Wietryk</h4>
          <h5>Stanowisko</h5>
        </div>
        <p>
          Ac natoque etiam aliquam elementum. Sapien vulputate nulla libero
          mattis dictum. Habitasse nisi accumsan id eget faucibus arcu ut neque.
          Facilisi amet augue eget quisque leo nec metus quis. Amet diam donec
          leo justo lacus. Tortor ipsum.
        </p>
      </div>
      <div>
        <img alt="Person2" src={testimonialImg2} />
        <div>
          <h4>Ime Nazwisko</h4>
          <h5>Stanowisko</h5>
        </div>
        <p>
          Ac natoque etiam aliquam elementum. Sapien vulputate nulla libero
          mattis dictum. Habitasse nisi accumsan id eget faucibus arcu ut neque.
          Facilisi amet augue eget quisque leo nec metus quis. Amet diam donec
          leo justo lacus. Tortor ipsum.
        </p>
      </div>
    </section>
  );
}
