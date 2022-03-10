import ListBatStuff from './Components/ListBatStuff';
import AddBatStuff from './Components/AddBatStuff';
import UpdateBatStuff from './Components/UpdateBatStuff';
import DeleteBatStuff from './Components/DeleteBatStuff';
// import ViewBatStuff from './Components/ViewBatStuff';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Gotham from'./Components/Gotham';

function App() {
  return (



    <BrowserRouter>
    <div className="App">
      <Header/>
      
      <Routes>
        {/* <Route path='/ViewBatStuff/:id' element={<ViewBatStuff/>}/> */}
        <Route path='/DeleteBatStuff/:name' element={<DeleteBatStuff/>}/>
        <Route path='/AddBatStuff/' element={<AddBatStuff/>}/>
        <Route path='/ListBatStuff/' element={<ListBatStuff/>}/>
        <Route path='/UpdateBatStuff/:id' element={<UpdateBatStuff/>}/>
        {/* <Route path='/ViewBatStuff/' element={<ViewBatStuff/>}/> */}
        <Route path='/Gotham' element={<Gotham/>}/>
      </Routes>
      {/* <img className='frontPage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPMoycOqXsYZ8O0suPgBm3FzRe5xYDFJT_g&usqp=CAU" ></img> */}
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
