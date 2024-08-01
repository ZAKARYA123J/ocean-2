import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import IndexTwo from './pages/index-two';
import IndexThree from './pages/index-three';
import IndexFour from './pages/index-four';
import IndexFive from './pages/index-five';
import IndexSix from './pages/index-six';
import IndexSeven from './pages/index-seven';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/index-two' element={<IndexTwo/>}/>
      <Route path='/index-three' element={<IndexThree/>}/>
      <Route path='/index-four' element={<IndexFour/>}/>
      <Route path='/index-five' element={<IndexFive/>}/>
      <Route path='/index-six' element={<IndexSix/>}/>
      <Route path='/index-seven' element={<IndexSeven/>}/>
    </Routes>
  );
}

export default App;
