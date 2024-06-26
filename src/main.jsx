import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import MovieDetails from './Pages/MovieDetails';
import Mylist from './Pages/Mylist';
import Searchkeyword from './Pages/Searchkeyword';
import MoreImagesP from './Pages/MoreImagesP';
import CastDetes from './Pages/CastDetes';
import SavedStillsP from './Pages/SavedStillsP';

const router = (
  
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detes/:id" element={<MovieDetails />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/searchbykeyword" element={<Searchkeyword />} />
      <Route path="/media" element={<MoreImagesP />} />
      <Route path="/castdetes" element={<CastDetes />} />
      <Route path="/savedstills" element={<SavedStillsP />} />





    </Routes>
  </Router>
);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(router);
