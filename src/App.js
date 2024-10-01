import './App.css';
import './assets/css/tailwind.css';
import './assets/css/materialdesignicons.min.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import Formation from './pages/formation';
import Service from './pages/service';
import Jobs from './components/recruitment/Jobs';
import IndexFive from './pages/index-five';
import Gallery from './components/Gallery/gallery';
import GalleryDetail from './components/Gallery/detailgallery';
import TeamPage from './components/TeamPage';
import TeamNurse from './components/TeamNurse';
import ContractPage from './components/ContractPage';
import TeamGlass from './components/TeamGlass';
import LanguagesPage from './components/LanguagesPage';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import { Events } from 'react-scroll';
function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/formation' element={<Formation />} />
        <Route path='/formation/:id' element={<IndexFive />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/jobs/:type' element={<Jobs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:id' element={<GalleryDetail />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/nurse" element={<TeamNurse />} />
        <Route path="/contract" element={<ContractPage />} />
        <Route path="/languages" element={<LanguagesPage />} /> 
        {/* <Route path="/languages" element={<LanguagesPage />} /> Fixed component to element */}
      </Routes>
    </HelmetProvider>
    // <Routes>
    //   <Route path='/' element={<Index/>}/>
    //   <Route path='/formation' element={<Formation/>}/>
    //   <Route path='/formation/:id' element={<IndexFive/>}/>
    //   <Route path='/service/:id' element={<Service/>}/>
    //   <Route path='/jobs/:type' element={<Jobs/>}/>
    //   <Route path='/gallery' element={<Gallery/>}/>
    //   <Route path='/gallery/:id' element={<GalleryDetail/>}/>
    //   <Route path="/teamGlass" element={<TeamGlass />} />
    //   <Route path="/team" element={<TeamPage />} />
    //   <Route path="/languages" component={LanguagesPage} />
    // </Routes>
  );
}

export default App;
