import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home';
import Client from './Pages/Client';
import Product from './Pages/Product';
import { ContextProvider } from '../src/context/UserContext'


function App() {
 
  return (
    <div className="App">
      <ContextProvider>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Client' element={<Client />} />
          <Route path='/Product' element={<Product />} />

        </Routes>
      </ContextProvider>



    </div>
  );
}

export default App;
