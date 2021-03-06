import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import  NotFound  from "./pages/NotFound";
import { GlobalProvider } from "./context/GlobalState";
import {Details} from './pages/Details';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movie/:movieId" element={<Details />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
