import {  useRef, useState } from "react";
import style from "./Cart.module.css";

function Cart() {
  let [isVisiable, setIsVisiable] = useState(false);
  let butRef = useRef(null);
  let cartRef = useRef(null);
  let svgRef = useRef(null);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState({x:200,y:300})

  function handleClick() {
    let but = butRef.current.getBoundingClientRect();
    let x = but.x
    let y = but.y
    setStartPosition({
      x: x + (but.width)/2,
      y: y,
    });
    setIsVisiable(true);
  }
  const handleTransitionEnd = () => {
    console.log(svgRef.current.getBoundingClientRect())
    setIsVisiable(false);
    
  };

  const handleAnimationStart = () =>{
    let cart = cartRef.current.getBoundingClientRect()
    let svg = svgRef.current.getBoundingClientRect()
    let y = cart.top - svg.top
    y = y>0?y:-y
    let x = svg.left - cart.left - (cart.width)/2
    x = x>0?x:-x
    setEndPosition({
        x,y
    })
  }
  return (
    <div className={style.cart}>
      <div className={style.top}>
        {isVisiable && (
          <div
            className={style.addWarpper}
            style={{
              "--left": `${startPosition.x}px`,
              "--top": `${startPosition.y}px`,
              "--x": `${endPosition.x}px`,
              "--y": `${endPosition.y}px`,
            }}
            onAnimationEnd={handleTransitionEnd}
            onAnimationStart={handleAnimationStart}
            ref={svgRef}
          >
            <div className={style.add}></div>
          </div>
        )}
        <div className={style.buttonWarpper}>
          <button onClick={handleClick} ref={butRef}>
            click me
          </button>
        </div>
      </div>

      <div className={style.bottom}>
        <div className={style.cart_bottom} ref={cartRef}></div>
      </div>
    </div>
  );
}
export default Cart;
