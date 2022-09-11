import React,{useState,useRef,useEffect} from 'react'

function useDraggable(setBorderHighlight, setPosition) {
    const [isDragging, setIsDragging] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const ref = useRef(null);
  
    function onMouseMove(e) {
      if (!isDragging) return;
      if(e.y > 470){
          setPosition("middle");
          return;
      }
      setPos({
        x: e.x - ref.current.offsetWidth / 2,
        y: e.y - ref.current.offsetHeight / 2,
      });
      e.stopPropagation();
      e.preventDefault();
    }
  
    function onMouseUp(e) {
      setIsDragging(false);
      e.stopPropagation();
      e.preventDefault();
    }
  
    function onMouseDown(e) {
        setPosition("")
        setBorderHighlight(false);
      if (e.button !== 0) return;
      setIsDragging(true);
  
      setPos({
        x: e.x - ref.current.offsetWidth / 2,
        y: e.y - ref.current.offsetHeight / 2,
      });
  
      e.stopPropagation();
      e.preventDefault();
    }
    
    useEffect(() => {
      ref.current.addEventListener("mousedown", onMouseDown);
  
      return () => {
          if(ref.current){

              ref.current.removeEventListener("mousedown", onMouseDown);
          }
      };
    }, [ref.current]);
  
    
    useEffect(() => {
      if (isDragging) {
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
      } else {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
      return () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      };
    }, [isDragging]);
  
    return [ref, pos.x, pos.y, isDragging];

}

export default useDraggable