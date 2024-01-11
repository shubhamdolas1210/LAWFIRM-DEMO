import "./App.css";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Introduction from "./Component/Introduction";
import ChooseCard from "./Component/ChooseCard";
import Practices from "./Component/Practices";
import Clients from "./Component/Clients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Introduction />
      <ChooseCard />
      <Practices />
      <Clients />
    </div>
  );
}

export default App;
