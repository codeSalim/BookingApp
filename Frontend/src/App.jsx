import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
function App() {


  return (
  <>
  
  <Router>
  <Navbar/>
  <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Signup' element={<Signup/>}/>




  </Routes>
   </Router>
 
  </>
  )
}

export default App
