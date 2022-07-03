import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

import { SphereObstacle, Bullet, Sphere, Soldier } from '@components/2Ds';
import { LEFT } from '@constants';
import { Object2D } from '@types';
import { Manager } from '@components/P5Canvas';

type P5CanvasProps = {
  width: number,
  height: number
}

function P5Canvas({ width, height } : P5CanvasProps) {

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background('white');

    Manager.init(width, height, p5);
    
    const o1 = new Soldier(p5, { x: 400, y: 250 }, 10, 'blue');
    const o2 = new Soldier(p5, { x: 600, y: 150 }, 10, 'orange');

    o1.draw();
    o2.draw();

    o2.aiming('25x^2 - 1.5x - 1', LEFT);
    o2.fire();
    
    
    
  };

  const draw = (p5: p5Types) => {
    //
    Manager.eventLoop();
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

export default P5Canvas;