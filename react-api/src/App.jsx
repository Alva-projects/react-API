import './App.css'
import Game from "./pages/Game.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
