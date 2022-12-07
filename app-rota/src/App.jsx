import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Page1 from './page/page1'
import Page2 from './page/page2'
import Page3 from './page/page3'


function App() {
  return (
   <>
    <div className="App">
        <header>
          <Link to="/" > <Button variant="outline-danger">Home</Button>{' '}</Link>
          <Link to="/usuario"><Button variant="danger">Usuário</Button>{' '} </Link>
          <Link to="/contato">  <Button variant="danger">Contato</Button>{' '}</Link>
        </header>
      <Routes>
        <Route path="/" element={<Page1/>} ></Route>
        <Route path="/usuario" element={<Page2/>} ></Route>
        <Route path="/contato" element={<Page3/>}></Route>
      </Routes>
      
    </div>
  </>
  )
}

export default App
