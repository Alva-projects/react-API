import './App.css'
import Game from "./pages/Game.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/Game" element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
