import "./App.css";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Introduction from "./Component/Introduction";
import ChooseCard from "./Component/ChooseCard";
import Practices from "./Component/Practices";
import Clients from "./Component/Clients";
import Team from "./Component/Team";
import Faq from "./Component/Faq";
import NewsLetter from "./Component/NewsLetter";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Introduction />
      <ChooseCard />
      <Practices />
      <Clients />
      <Team />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
