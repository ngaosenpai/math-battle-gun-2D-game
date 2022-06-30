import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

import { SphereObstacle } from '@components/2Ds';

type P5CanvasProps = {
  width: number,
  height: number
}

function P5Canvas({ width, height } : P5CanvasProps) {


  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background('gray');

    const o1 = new SphereObstacle(p5, { x: 10, y: 10 }, 10, 'white');
    o1.draw();
    const o2 = new SphereObstacle(p5, { x: 20, y: 20 }, 10, 'red');
    o2.draw();
  };

  const draw = (p5: p5Types) => {
    //
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

export default P5Canvas;