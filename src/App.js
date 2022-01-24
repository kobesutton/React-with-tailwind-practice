import { Route, Routes } from 'react-router';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import {useState, useEffect} from 'react'
import Contact from './pages/Contact';

 const App = () => {

  const [dropdown, setDropdown] = useState(false)

  const toggle = () => {
    setDropdown(!dropdown)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && dropdown) {
        setDropdown(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
     <Navbar toggle={toggle}/>
     <Dropdown dropdown={dropdown} toggle={toggle}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
    <Footer/>
    </>
  )
}

export default App;
