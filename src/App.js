import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
function App() {


 
  return (
    <div>
      
      <BrowserRouter>
      <Routes>

       <Route path='/'  element={<Layout/>}>
         <Route index element={<Home/>}></Route>
          <Route path='about' element={<About/>}/>
        
       </Route>


      </Routes>
      </BrowserRouter>
      
      
     
    </div>

  );
}

export default App;
