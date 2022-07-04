import logo from "./logo.svg";
import "./App.css";
import TwoColumn from "./components/twoColumn";
import Membership from "./components/membership";
import Footer from "./components/footer";
import Header from "./components/header";
import Offerings from "./components/offerings";
import FeaturedClass from "./components/featured class";
import Hero from "./components/hero";
import FeaturedNews from "./components/featured news";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedNews />
      <Membership />
      <Offerings />
      <FeaturedClass />
      <TwoColumn />
      <Footer />
    </div>
  );
}

export default App;
