import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from "./loader/Loader";

// Импорты страниц
import About from "../Pages/About/About"
import Price from "../Pages/Price/Price"
import Feedbacks from "../Pages/Feedbacks/Feedbacks"

const AppRouter = () => {

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/feedbacks" element={<Feedbacks />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  );
};

export default AppRouter;