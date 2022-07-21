import Features from "./modules/Features";
import Services from "./modules/Services";

import Testimonials from "./modules/Testimonials";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import "./styles/css/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
