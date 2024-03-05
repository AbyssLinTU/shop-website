import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { state } from "./data.js";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import { ViewPage } from "./components/ViewPage/ViewPage.jsx";
import { StateProvider } from "./context/context.jsx";
import { Basket } from "./components/Basket/Basket.jsx";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <Routes>
              <Route path="/*" element={<Navigate to="/main" />} />
              <Route path="/main/:id" element={<ViewPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/about" element={<AboutUs state={state} />} />
              <Route path="/basket" element={<Basket state={state} />} />
            </Routes>
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
