import "./App.css";
import Navbar from "./Component/header";
import { BrowserRouter } from "react-router-dom";
import Home from "./Component/home";
import CardExample from "./Component/corousel";
// import Testimonial from "./Component/testimonial";
import HigherStudiesCarousel from "./Component/HigherStudiesCarousel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div>
        <Home />
      </div>
      <div>
        <CardExample />
      </div>
      <div>
        <HigherStudiesCarousel />
      </div>
    </div>
  );
}

export default App;
