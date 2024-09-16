import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import Formation from './pages/formation';
import Service from './pages/service';
import Jobs from './components/recruitment/Jobs'
import IndexFive from './pages/index-five';
import Gallery from './components/Gallery/gallery'
import GalleryDetail from './components/Gallery/detailgallery'
import TeamPage from './components/TeamPage';
import TeamGlass from './components/TeamGlass';
import LanguagesPage from './components/LanguagesPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/formation' element={<Formation/>}/>
      <Route path='/formation/:id' element={<IndexFive/>}/>
      <Route path='/service/:id' element={<Service/>}/>
      <Route path='/jobs/:type' element={<Jobs/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/gallery/:id' element={<GalleryDetail/>}/>
      <Route path="/teamGlass" element={<TeamGlass />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/languages" component={LanguagesPage} />
    </Routes>
  );
}

export default App;
