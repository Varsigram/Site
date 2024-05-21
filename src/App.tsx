import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './notfound';
import { Home } from './site/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
