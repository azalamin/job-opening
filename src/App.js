import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Jobs />
    </div>
  );
}

export default App;
