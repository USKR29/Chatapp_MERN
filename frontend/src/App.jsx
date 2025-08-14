
import Login from './Components/Login';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Signup from './Components/Signup';
import { Messanger } from './Components/Messanger';
import Navbar from './Components/Navbar';

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/chat' Component={Messanger}/>
        </Routes>

    </BrowserRouter>
  )
  
}

export default App
