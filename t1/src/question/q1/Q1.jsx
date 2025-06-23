import { useRef, useState } from "react"
import { content } from "./content"
import './Q1.css'
export default function Q1(){
    // 问题描述：
    // 当hover的时候，容器高度由0->auto的时候，过度效果无法出现
    //错误方法一，设置最大高度为一个很大的值；缺点：在消失和出现的时候会停顿一下
    // 原因 设置的最大高度很大。所以过度的速度很慢，收的
    //
    let [contentHeight,setContentHeight] = useState("auto") 
    let contentRef = useRef(null)
    let [isOpen,setIsOpen] = useState(false)
    function handleMouseEnter(){
        console.log("enter")
        setIsOpen((v)=>!v)
        let dom = contentRef.current
        let h = dom.scrollHeight
        setContentHeight(`${h}px`)
        
    }
    function handleTransitionEnd(){
        if(!isOpen) setContentHeight("auto")
    }
    function handleMouseLeave(){
        console.log("leave")
        setIsOpen((v)=>!v)
    }
    return (
        <div className="container">
            <button className="but" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>click me</button>
            <div className="q1_content" ref={contentRef} onTransitionEnd={handleTransitionEnd} style={{height: `${isOpen?contentHeight:"0px"}`}}>{content}</div>
        </div>
    )
}