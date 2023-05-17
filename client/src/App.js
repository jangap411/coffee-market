import "./App.css";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Upcoming from "./components/upcoming/Upcoming";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Upcoming />
      <Footer />
    </>
  );
};

export default App;
