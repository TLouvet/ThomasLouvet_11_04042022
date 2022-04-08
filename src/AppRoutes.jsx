import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { AproposPage } from './pages/apropos';
import { AccomodationPage } from './pages/accomodation';
import { NotFoundPage } from './pages/notfound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apropos" element={<AproposPage />} />
      <Route path="/accomodation/:id" element={<AccomodationPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
} 