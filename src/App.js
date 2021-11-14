import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products';
import Course from './components/Course';
import DisplayEnquiry from './components/DisplayEnquiry';
import Navv from './components/Navv';
import Forms from './components/Form';
function App() {
  return (

    <>
      <BrowserRouter>
        <Navv />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/display" element={<DisplayEnquiry />} />
          <Route path="/form/:name" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
