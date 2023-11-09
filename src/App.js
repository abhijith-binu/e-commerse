import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewPage from './Components/ViewPage';
import Login from './Components/Login';

function App() {
  return (
    <>
     <header>
        <Header/>
     </header>


     <section>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/viewpage' element={<ViewPage/>}/>
        </Routes>
      </section>
    

     <footer>
       <Footer/>
     </footer>
    </>
  );
}

export default App;
