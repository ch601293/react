import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  let [currentIndex, setCurrentIndex] = useState(1);
  let [isTransition, setIsTranstion] = useState(true);
  let slide = [0, 1, 2];
    
  let slideWithClone = [slide[slide.length-1],...slide,slide[0]]
  const totalSlides = slideWithClone.length;
  useEffect(() => {
    console.log(isTransition)
    if (!isTransition) {
        setTimeout(() => {
            setIsTranstion(true);
        }, 50);    
    }
  }, [isTransition]);
  console.log(`start${currentIndex}`)
  function moveToRight() {
    if (!isTransition) return
    setCurrentIndex(currentIndex=>currentIndex + 1);
  }
  function moveToLeft() {
    if (!isTransition) return
    setCurrentIndex(currentIndex=>currentIndex - 1);
  }
  const handleTransitionEnd = () => {
    // 当滚动到末尾的克隆 slide (S1-clone)
    if (currentIndex === totalSlides - 1) {
      setIsTranstion(false); // 暂时禁用 transition
      setCurrentIndex(1); // 瞬间跳到真实的 S1
    }
    // 当滚动到开头的克隆 slide (S3-clone)
    if (currentIndex === 0) {
      setIsTranstion(false); // 暂时禁用 transition
      setCurrentIndex(totalSlides - 2); // 瞬间跳到真实的 S3
    }
  };
  return (
    <div className="continor">
      <button className="left not" onClick={moveToLeft}>
        {"<"}
      </button>
      <div
        className="list"
        style={{ transform: `translateX(-${currentIndex * 100}%)` ,
                transition: `${isTransition?"transform 0.5s ease-in-out":""}`}}
        onTransitionEnd={handleTransitionEnd}>
        {
            slideWithClone.map((value,index)=>{
                return (
                    <div className="item" key={index}>{value}</div>
                )
            })
        }
      </div>
      <button className="right not" onClick={moveToRight}>
        {">"}
      </button>
      <div className="bottom">
        {slide.map((value,index) => (
          <div
            className="slide"
            key={index}
            style={{
              "background-color": `${currentIndex == value+1 ? "pink" : "#fff"}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
