import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Index from './pages';
import Formation from './pages/formation';
import IndexSeven from './pages/index-seven';
import Service from './pages/service';
import Jobs from './components/recruitment/Jobs'
import IndexFive from './pages/index-five';
import Gallery from './components/gallery'; 


function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/formation' element={<Formation/>}/>
      <Route path='/formation/:id' element={<IndexFive/>}/>
      <Route path='/service/:id' element={<Service/>}/>
      <Route path='/jobs/:type' element={<Jobs/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
  );
}

export default App;
