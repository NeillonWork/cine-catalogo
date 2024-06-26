import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme/filme";
import Header from "./components/Header";
import Favorito from "./pages/Favoritos/favoritos";
import Error from "./pages/Error/error";

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/favoritos" element={<Favorito />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
