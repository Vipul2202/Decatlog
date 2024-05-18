import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';


import Signup from './Components/Signup';
import Pages from './Components/Pages';
import Login from './Components/Login';


function App() {
  return (
 <div>
 <Router>
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
    </Router>

 </div>
  );
}

export default App;
