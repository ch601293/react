import { BrowserRouter } from 'react-router-dom'
import {  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas} from './components'
function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <Works></Works>
        <Feedbacks></Feedbacks>
        <div className='relactive z-0'>
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
