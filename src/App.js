import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "./AddMovie/Addmovie";
import NotFound from "./NotFound";
import RandomMovie from "./RandomPick/RandomMovie";
import Filter from "./FilterMovie/Filter";
import "../src/App.css";
import Practice from "./Practice";

function App() {
  return (
    <>
      <div className="appClass">
        {/* <Practice /> */}
        <BrowserRouter>
          <div className="App">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addMovie" element={<AddMovie />} />

            <Route path="/randomMovie" element={<RandomMovie />} />
            <Route path="/filterform" element={<Filter />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
