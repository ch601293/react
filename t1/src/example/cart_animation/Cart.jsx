import { useEffect, useRef, useState } from "react";
import style from "./Cart.module.css";

function Cart() {
  let [isVisiable, setIsVisiable] = useState(false);
  let butRef = useRef(null);
  let cartRef = useRef(null);
  let svgRef = useRef(null);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState({x:200,y:300})
  useEffect(() => {
    if (isVisiable) {
      let svg = svgRef.current.getBoundingClientRect();
      let but = butRef.current.getBoundingClientRect();

    }
  }, [isVisiable]);

  function handleClick() {
    let but = butRef.current.getBoundingClientRect();
    let x = but.x
    let y = but.y
    console.log(but)
    setStartPosition({
      x: x + (but.width)/2,
      y: y,
    });
    console.log(x + (but.width)/2)
    console.log(y)
    setIsVisiable(true);
  }
  const handleTransitionEnd = () => {
    console.log(svgRef.current.getBoundingClientRect())
    //setIsVisiable(false);
    
  };
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
