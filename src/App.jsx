import './App.css'
import Home from './components/pages/Home'
import RootLayout from './components/layouts/RootLayout'
import { Routes,Route } from 'react-router-dom'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import Journal from './components/pages/Journal'





function App() {
 
  return (
   <>
   <Routes>
     <Route path="/" element={<RootLayout />}>
     <Route index element={<Home />} />
     <Route path="shop" element={<Shop />} />
     <Route path="about" element={<About />} />
     <Route path="contacts" element={<Contacts />} />
     <Route path="journal" element={<Journal />} />
     <Route path="*" element={<Error />} />
  </Route>

   </Routes>
   </>
  )
}

export default App
