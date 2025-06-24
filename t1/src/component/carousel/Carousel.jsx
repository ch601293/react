import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  let [currentIndex, setCurrentIndex] = useState(1);
  let [isTransition, setIsTranstion] = useState(true);
  let slide = [0, 1, 2];
  // 首先布局的思路是父容器div定位为相对，子元素div为绝对，这样子元素的位置相对于父元素开始
  // 然后 button 和 slide设置为浮动
  // 在map内容数组的首尾进行填充首元素和尾元素
  // 在向左移动到第一个要跳跃的时候判断是否要跳跃，关闭trasition动画时间
  // 然后在移动到原本的位置，利用transitionend函数
  // transition run->start->end事件监听函数
  let slideWithClone = [slide[slide.length-1],...slide,slide[0]]
  const totalSlides = slideWithClone.length;
  useEffect(() => {
    //console.log(isTransition)
    if (!isTransition) {
        setTimeout(() => {
            setIsTranstion(true);
        }, 50);    
    }
  }, [isTransition]);
  //console.log(`start${currentIndex}`)
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
