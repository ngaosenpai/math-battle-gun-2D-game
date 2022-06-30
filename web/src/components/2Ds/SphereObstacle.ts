import p5Types from 'p5';
import { Sphere } from './index';
import { Coordinate } from '@types';

class SphereObstacle extends Sphere{
  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){
    super(p5, coor, radius, color);
  }


}

export default SphereObstacle;