import p5Types from 'p5';
import { Coordinate } from '@types';

class Shere{
  private p5;
  private coor;
  private radius;
  private color;

  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){
    this.p5 = p5;
    this.coor = coor;
    this.radius = radius;
    this.color = color;
  }

  draw(){
    this.p5.fill(this.color);
    this.p5.noStroke();
    const { x, y } = this.coor;
    this.p5.ellipse(x, y, this.radius, this.radius);
  }

}

export default Shere;