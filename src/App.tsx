
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/HomePages'
import AboutSection from './pages/About'

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route element={<LandingPage></LandingPage>} path='/'></Route>
  <Route element={<AboutSection></AboutSection>} path='/about'></Route>
</Routes>
</BrowserRouter>
  )
}

export default App