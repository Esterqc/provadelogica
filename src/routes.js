import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acai from './pages/acai';
import Signo from './pages/signo';

export default function Index() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/acai' element={<Acai />} />
          <Route path='/signo' element={<Signo />} />
          </Routes>
    </BrowserRouter>
  )
}