import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import IndexFive from './pages/index-five';
import Formation from './pages/formation';
import IndexSeven from './pages/index-seven';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      {/* <Route path='/index-two' element={<IndexTwo/>}/>
      <Route path='/index-three' element={<IndexThree/>}/>
      <Route path='/index-four' element={<IndexFour/>}/> */}
      <Route path='/formation/:id' element={<IndexFive/>}/>
      <Route path='/formation' element={<Formation/>}/>
      <Route path='/index-seven' element={<IndexSeven/>}/>
      {/* <Route path='/service' element={<Service/>}/>  */}
      
      
      
    </Routes>
  );
}

export default App;
