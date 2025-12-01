import './App.css'
import Joke from "./assets/JokeAPI.jsx"
import Form from "./pages/Form.jsx"
import Game from "./pages/Game.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game/>} />
          <Route path="/sign-in" element={<Form/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
