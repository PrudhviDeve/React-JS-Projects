
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';



function App() {

 
return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComponentOne />} />
      <Route path='/second/:ID' element={<ComponentTwo />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
