import p5Types from 'p5';
import { Sphere } from './index';
import { Coordinate, LoR, Limit } from '@types';

class Bullet extends Sphere{
  private equation: string;
  private direction: LoR | undefined;
  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){
    super(p5, coor, radius, color);
    this.equation = '';
    this.direction = undefined;
  }

  init(equation: string, direction: LoR, limit: Limit){
    this.equation = equation;
    this.direction = direction;
  }

  fire(){
    // draw bullet continuously: ... -> ........  
  }

}

export default Bullet;