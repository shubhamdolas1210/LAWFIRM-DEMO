import "./App.css";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Introduction from "./Component/Introduction";
import ChooseCard from "./Component/ChooseCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Introduction />
      <ChooseCard />
    </div>
  );
}

export default App;
