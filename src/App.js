import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Posts from "./components/Posts/Posts";
import Post1 from "./components/Posts/PostsItem/Post1";
import Post2 from "./components/Posts/PostsItem/Post2";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <WhyChooseUs />
              <Services />
              <Testimonials />
              <FAQ />
            </>
          }
        />
        <Route
          path="/p/automatyka-domowa-loxone-dla-projektantow-wnetrz"
          element={
            <>
              <HomePage homePage="false" />
              <Post1 />
            </>
          }
        />
        <Route
          path="/p/ogrzewanie-w-inteligentnym-mieszkaniu"
          element={
            <>
              <HomePage homePage={false} />
              <Post2 />
            </>
          }
        />
      </Routes>
      <ContactUs />
      <Posts />
      <Footer />
    </Router>
  );
}

export default App;
