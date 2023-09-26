import "./App.css";
import Courses from "./component/courses/courses";
import Feedback from "./component/feedback-section/feedback";
import Footer from "./component/footer-section/footer";
import Header from "./component/header-section/header";
import Hero from "./component/hero-section/hero";
import logo from "./component/images/logo.svg";
import Instructor from "./component/instructor/instructor";
import Services from "./component/services-section/services";
import Slider from "./component/slider-section/slider";
function App() {
  return (
    <>
      <Header logo={logo} />
      <Hero />
      <Services />
      <Courses />
      <Instructor />
      <Slider />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
