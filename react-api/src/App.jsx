import './App.css'
import Joke from "./assets/JokeAPI.jsx"
import Form from "./pages/Form.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Joke/>} />
          <Route path="/sign-in/up" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
