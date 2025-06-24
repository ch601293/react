import Carousel from './component/carousel/Carousel'
import Q1 from './question/q1/Q1'
import './App.css'
import Cart from './example/cart_animation/Cart'

function App() {

  return (
    <div className='content'>
      <Carousel></Carousel>
      <Q1></Q1>
      <Cart></Cart>
    </div>
  )
}

export default App
