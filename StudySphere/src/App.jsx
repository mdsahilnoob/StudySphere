import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage2 from './pages/LoginPage2'
import SimpleInputPage from './pages/SimpleInputPage'
import SignUpPage2 from './pages/SignUpPage2'
import HomePage from './pages/HomePage'



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/simple-input" element={<SimpleInputPage/>} />
          <Route path="/login" element={<LoginPage2/>} />
          <Route path='/signup' element={<SignUpPage2/>} />
          <Route path='/' element={<HomePage/>}/>
          


        </Routes>
      </Router>
    </>
  )
}

export default App
