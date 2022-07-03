import React, { useEffect, useRef, useState } from 'react';
import { P5Canvas } from '@components/P5Canvas';

function GameContainer() {

  const containerRef = useRef<null | HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if(containerRef.current){
      const { height, width } = containerRef.current.getBoundingClientRect();
      setSize({
        w: width,
        h: height 
      });
    }
  }, []);

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <div ref={containerRef} className='full-screen'>
      <P5Canvas width={1024} height={480} />
    </div>
  );
}

export default GameContainer;