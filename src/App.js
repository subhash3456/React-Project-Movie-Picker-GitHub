import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "./AddMovie/Addmovie";
import NotFound from "./NotFound";
import RandomMovie from "./RandomPick/RandomMovie";
import Filter from "./FilterMovie/Filter";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
