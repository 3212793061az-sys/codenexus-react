import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Python from './pages/Python'
import JavaScript from './pages/JavaScript'
import Css from './pages/Css'
import Java from './pages/Java'
import Git from './pages/Git'
import Html from './pages/Html'
import Node from './pages/Node'
import Php from './pages/Php'
import Api from './pages/Api'

function App() {
  return (
    <BrowserRouter basename="/codenexus-react">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/css" element={<Css />} />
        <Route path="/java" element={<Java />} />
        <Route path="/git" element={<Git />} />
        <Route path="/html" element={<Html />} />
        <Route path="/node" element={<Node />} />
        <Route path="/php" element={<Php />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
