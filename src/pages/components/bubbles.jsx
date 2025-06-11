import { useEffect, useRef } from 'react';
import '../styles/bubbles.css'; 

function Bubbles() {
  const bubbleRef = useRef(null);
  const cur = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = () => {
      cur.current.x += (tgt.current.x - cur.current.x) / 20;
      cur.current.y += (tgt.current.y - cur.current.y) / 20;
      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${Math.round(cur.current.x)}px, ${Math.round(cur.current.y)}px)`;
      }
      requestAnimationFrame(move);
    };


    const onMouseMove = (event) => {
      tgt.current.x = event.clientX;
      tgt.current.y = event.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="interactive" ref={bubbleRef}></div>
      </div>
    </div>
  );
}

export default Bubbles;